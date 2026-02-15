/* ============================================
   JWT TOKEN AUTHENTICATION
   Secure token generation and verification
   ============================================ */

class JWTAuth {
    constructor(secret = 'codepath-secret-key-2026') {
        this.secret = secret;
        this.algorithm = 'HS256';
        this.tokenExpiration = 7 * 24 * 60 * 60 * 1000; // 7 days in milliseconds
    }

    /**
     * Create a simple hash of a string
     * Note: This is simplified for client-side use. For production, use a proper backend JWT.
     */
    hash(str) {
        let hash = 0;
        if (str.length === 0) return hash.toString();
        
        for (let i = 0; i < str.length; i++) {
            const char = str.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash = hash & hash; // Convert to 32bit integer
        }
        return Math.abs(hash).toString(16);
    }

    /**
     * Base64 URL encode
     */
    base64UrlEncode(str) {
        return btoa(JSON.stringify(str))
            .replace(/\+/g, '-')
            .replace(/\//g, '_')
            .replace(/=/g, '');
    }

    /**
     * Base64 URL decode
     */
    base64UrlDecode(str) {
        try {
            str += '='.repeat((4 - str.length % 4) % 4);
            const decoded = atob(str.replace(/-/g, '+').replace(/_/g, '/'));
            return JSON.parse(decoded);
        } catch (e) {
            return null;
        }
    }

    /**
     * Generate JWT Token
     */
    generateToken(userData) {
        try {
            // Header
            const header = {
                alg: this.algorithm,
                typ: 'JWT'
            };

            // Payload (claims)
            const payload = {
                ...userData,
                iat: Math.floor(Date.now() / 1000), // Issued at
                exp: Math.floor(Date.now() / 1000) + this.tokenExpiration / 1000, // Expiration
                jti: this.generateJTI() // JWT ID (unique identifier)
            };

            // Encode header and payload
            const headerEncoded = this.base64UrlEncode(header);
            const payloadEncoded = this.base64UrlEncode(payload);

            // Create signature
            const message = `${headerEncoded}.${payloadEncoded}`;
            const signature = this.hash(message + this.secret);
            const signatureEncoded = this.base64UrlEncode(signature);

            // Combine all parts
            const token = `${headerEncoded}.${payloadEncoded}.${signatureEncoded}`;

            return {
                token: token,
                expiresIn: this.tokenExpiration,
                expiresAt: new Date(Date.now() + this.tokenExpiration).toISOString()
            };
        } catch (error) {
            console.error('[JWT] Token generation failed:', error);
            return null;
        }
    }

    /**
     * Verify JWT Token
     */
    verifyToken(token) {
        try {
            const parts = token.split('.');
            if (parts.length !== 3) {
                console.error('[JWT] Invalid token format');
                return null;
            }

            const [headerEncoded, payloadEncoded, signatureEncoded] = parts;

            // Recreate signature to verify
            const message = `${headerEncoded}.${payloadEncoded}`;
            const expectedSignature = this.hash(message + this.secret);
            const expectedSignatureEncoded = this.base64UrlEncode(expectedSignature);

            // Verify signature
            if (signatureEncoded !== expectedSignatureEncoded) {
                console.error('[JWT] Invalid signature');
                return null;
            }

            // Decode and verify payload
            const payload = this.base64UrlDecode(payloadEncoded);
            if (!payload) {
                console.error('[JWT] Invalid payload');
                return null;
            }

            // Check expiration
            const now = Math.floor(Date.now() / 1000);
            if (payload.exp && payload.exp < now) {
                console.error('[JWT] Token expired');
                return null;
            }

            return payload;
        } catch (error) {
            console.error('[JWT] Token verification failed:', error);
            return null;
        }
    }

    /**
     * Generate unique JWT ID
     */
    generateJTI() {
        return `jti_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    }

    /**
     * Decode token without verification (use with caution)
     */
    decodeToken(token) {
        try {
            const parts = token.split('.');
            if (parts.length !== 3) return null;
            
            const payloadEncoded = parts[1];
            return this.base64UrlDecode(payloadEncoded);
        } catch (error) {
            console.error('[JWT] Token decode failed:', error);
            return null;
        }
    }

    /**
     * Check if token is expired
     */
    isTokenExpired(token) {
        const payload = this.decodeToken(token);
        if (!payload) return true;

        const now = Math.floor(Date.now() / 1000);
        return payload.exp && payload.exp < now;
    }

    /**
     * Get time until token expires
     */
    getTimeUntilExpiry(token) {
        const payload = this.decodeToken(token);
        if (!payload) return null;

        const now = Math.floor(Date.now() / 1000);
        const secondsLeft = payload.exp - now;
        
        if (secondsLeft <= 0) return null;

        return {
            seconds: secondsLeft,
            minutes: Math.floor(secondsLeft / 60),
            hours: Math.floor(secondsLeft / 3600),
            days: Math.floor(secondsLeft / 86400)
        };
    }

    /**
     * Refresh/renew a token
     */
    refreshToken(token) {
        const payload = this.decodeToken(token);
        if (!payload) return null;

        // Remove expiration fields and regenerate
        delete payload.iat;
        delete payload.exp;
        delete payload.jti;

        return this.generateToken(payload);
    }
}

// ============================================
// TOKEN MANAGEMENT IN LOCALSTORAGE
// ============================================

class TokenManager {
    constructor() {
        this.jwtAuth = new JWTAuth();
        this.tokenKey = 'codepath_auth_token';
        this.tokenListKey = 'codepath_tokens';
    }

    /**
     * Save user token to localStorage
     */
    saveToken(user) {
        try {
            const tokenData = this.jwtAuth.generateToken({
                username: user.username,
                email: user.email,
                name: user.name,
                role: user.role || 'student'
            });

            if (tokenData) {
                localStorage.setItem(this.tokenKey, tokenData.token);
                localStorage.setItem(`${this.tokenKey}_expires`, tokenData.expiresAt);
                
                // Save token to token list for audit trail
                this.addTokenToList(user.username, tokenData.token, tokenData.expiresAt);
                
                console.log('[TokenManager] Token saved successfully');
                return tokenData;
            }
        } catch (error) {
            console.error('[TokenManager] Failed to save token:', error);
        }
        return null;
    }

    /**
     * Get current token from localStorage
     */
    getToken() {
        return localStorage.getItem(this.tokenKey);
    }

    /**
     * Get current token data
     */
    getTokenData() {
        const token = this.getToken();
        if (!token) return null;

        return this.jwtAuth.decodeToken(token);
    }

    /**
     * Verify stored token
     */
    verifyStoredToken() {
        const token = this.getToken();
        if (!token) return null;

        return this.jwtAuth.verifyToken(token);
    }

    /**
     * Check if stored token is valid
     */
    isTokenValid() {
        const payload = this.verifyStoredToken();
        return payload !== null;
    }

    /**
     * Clear token from localStorage
     */
    clearToken() {
        localStorage.removeItem(this.tokenKey);
        localStorage.removeItem(`${this.tokenKey}_expires`);
        console.log('[TokenManager] Token cleared');
    }

    /**
     * Refresh stored token
     */
    refreshStoredToken() {
        const token = this.getToken();
        if (!token) return null;

        const newTokenData = this.jwtAuth.refreshToken(token);
        if (newTokenData) {
            localStorage.setItem(this.tokenKey, newTokenData.token);
            localStorage.setItem(`${this.tokenKey}_expires`, newTokenData.expiresAt);
            return newTokenData;
        }
        return null;
    }

    /**
     * Add token to list (for audit trail)
     */
    addTokenToList(username, token, expiresAt) {
        try {
            const tokens = this.getTokenList();
            tokens.push({
                username: username,
                token: token,
                issuedAt: new Date().toISOString(),
                expiresAt: expiresAt,
                revoked: false,
                jti: this.jwtAuth.decodeToken(token).jti
            });

            // Keep only last 10 tokens per user
            const userTokens = tokens.filter(t => t.username === username);
            if (userTokens.length > 10) {
                const tokensToRemove = userTokens.slice(0, userTokens.length - 10);
                const tokensToRemoveJTIs = tokensToRemove.map(t => t.jti);
                const filteredTokens = tokens.filter(t => !tokensToRemoveJTIs.includes(t.jti));
                localStorage.setItem(this.tokenListKey, JSON.stringify(filteredTokens));
            } else {
                localStorage.setItem(this.tokenListKey, JSON.stringify(tokens));
            }
        } catch (error) {
            console.error('[TokenManager] Failed to add token to list:', error);
        }
    }

    /**
     * Get all tokens list
     */
    getTokenList() {
        try {
            const tokens = localStorage.getItem(this.tokenListKey);
            return tokens ? JSON.parse(tokens) : [];
        } catch (error) {
            console.error('[TokenManager] Failed to get token list:', error);
            return [];
        }
    }

    /**
     * Revoke a specific token
     */
    revokeToken(jti) {
        try {
            const tokens = this.getTokenList();
            const token = tokens.find(t => t.jti === jti);
            if (token) {
                token.revoked = true;
                localStorage.setItem(this.tokenListKey, JSON.stringify(tokens));
                console.log('[TokenManager] Token revoked:', jti);
                return true;
            }
        } catch (error) {
            console.error('[TokenManager] Failed to revoke token:', error);
        }
        return false;
    }

    /**
     * Get user tokens
     */
    getUserTokens(username) {
        const tokens = this.getTokenList();
        return tokens.filter(t => t.username === username);
    }

    /**
     * Get token expiry time
     */
    getTokenExpiry() {
        const token = this.getToken();
        if (!token) return null;

        return this.jwtAuth.getTimeUntilExpiry(token);
    }

    /**
     * Clear expired tokens from list
     */
    clearExpiredTokens() {
        try {
            const tokens = this.getTokenList();
            const now = new Date();
            
            const activeTokens = tokens.filter(t => {
                const expiresAt = new Date(t.expiresAt);
                return expiresAt > now && !t.revoked;
            });

            localStorage.setItem(this.tokenListKey, JSON.stringify(activeTokens));
            console.log('[TokenManager] Expired tokens cleared');
        } catch (error) {
            console.error('[TokenManager] Failed to clear expired tokens:', error);
        }
    }

    /**
     * Check if user is authenticated via token
     */
    isAuthenticated() {
        return this.isTokenValid();
    }

    /**
     * Get authenticated user info from token
     */
    getAuthenticatedUser() {
        const payload = this.verifyStoredToken();
        if (!payload) return null;

        return {
            username: payload.username,
            email: payload.email,
            name: payload.name,
            role: payload.role
        };
    }
}

// ============================================
// INITIALIZATION
// ============================================

// Create global instances
const jwtAuth = new JWTAuth();
const tokenManager = new TokenManager();

// Auto-refresh token on page load if about to expire
document.addEventListener('DOMContentLoaded', () => {
    const expiry = tokenManager.getTokenExpiry();
    
    if (expiry) {
        if (expiry.hours < 1) {
            console.log('[JWT] Token about to expire, refreshing...');
            tokenManager.refreshStoredToken();
        }
    }

    // Clear expired tokens periodically
    setInterval(() => {
        tokenManager.clearExpiredTokens();
    }, 60 * 60 * 1000); // Every hour
});

// ============================================
// EXPORT FOR USE
// ============================================
window.jwtAuth = jwtAuth;
window.tokenManager = tokenManager;
