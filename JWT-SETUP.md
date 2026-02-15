# JWT Authentication Setup

## Overview

Your CodePath application now includes a complete JWT (JSON Web Token) authentication system for secure user session management.

## Files Added

### 1. **auth.js** - JWT Authentication Module
Complete JWT token implementation with the following classes:

#### `JWTAuth` Class
- **generateToken(userData)** - Creates a new JWT token
- **verifyToken(token)** - Verifies token signature and expiration
- **decodeToken(token)** - Decodes token without verification
- **isTokenExpired(token)** - Checks if token has expired
- **getTimeUntilExpiry(token)** - Returns time remaining on token
- **refreshToken(token)** - Creates a new token with same user data

#### `TokenManager` Class
- **saveToken(user)** - Saves token to localStorage
- **getToken()** - Retrieves current token
- **verifyStoredToken()** - Verifies the stored token
- **isTokenValid()** - Checks if stored token is valid
- **clearToken()** - Removes token from storage
- **refreshStoredToken()** - Refreshes the stored token
- **getTokenExpiry()** - Gets time until expiration
- **isAuthenticated()** - Checks if user is authenticated
- **getAuthenticatedUser()** - Returns authenticated user info
- **revokeToken(jti)** - Revokes a specific token
- **getUserTokens(username)** - Gets all tokens for a user
- **clearExpiredTokens()** - Removes expired tokens

### 2. **.gitignore** - Git Ignore Rules
Standard file to prevent committing sensitive data:
- `node_modules/`
- `.env` files
- IDE configuration
- Logs and coverage
- Sensitive files (`secrets.json`, `credentials.json`, etc.)

## How It Works

### Token Structure
Tokens follow the standard JWT format: `header.payload.signature`

```
{
  "alg": "HS256",        // Algorithm
  "typ": "JWT"           // Type
}
.
{
  "username": "demo1",   // User identifier
  "email": "demo@test.com",
  "name": "Demo User",
  "role": "student",
  "iat": 1708100000,     // Issued at (timestamp)
  "exp": 1708700000,     // Expiration (timestamp)
  "jti": "jti_1708100000_xyz123" // Unique ID
}
.
[SIGNATURE]            // HMAC-SHA256 signature
```

### Token Lifespan
- **Default Duration**: 7 days
- **Automatic Refresh**: Tokens refresh automatically when 1 hour remains
- **Revocation**: Tokens can be manually revoked
- **Expiration Check**: Automatic clearing of expired tokens hourly

### User Authentication Flow

1. **Sign Up/Login**
   ```javascript
   // User submits credentials
   handleSignup() / handleLogin()
   
   // JWT token is automatically generated
   tokenManager.saveToken(user)
   
   // Token stored in localStorage
   // User redirected to dashboard
   ```

2. **Session Management**
   ```javascript
   // Check if user is authenticated
   tokenManager.isAuthenticated()  // returns boolean
   
   // Get current user info from token
   tokenManager.getAuthenticatedUser()
   
   // Get remaining time on token
   tokenManager.getTokenExpiry()
   ```

3. **Logout**
   ```javascript
   handleLogout()
   
   // Clears token from storage
   tokenManager.clearToken()
   
   // User redirected to login
   ```

## Usage Examples

### Check User Authentication
```javascript
if (tokenManager.isAuthenticated()) {
    console.log('User is logged in');
    const user = tokenManager.getAuthenticatedUser();
    console.log(`Welcome, ${user.name}`);
} else {
    console.log('User is not authenticated');
    window.location.href = 'login.html';
}
```

### Get Token Expiry Info
```javascript
const expiry = tokenManager.getTokenExpiry();
if (expiry) {
    console.log(`Token expires in ${expiry.hours} hours`);
    if (expiry.hours < 1) {
        // Refresh token if less than 1 hour remaining
        tokenManager.refreshStoredToken();
    }
}
```

### Verify and Decode Token
```javascript
const token = tokenManager.getToken();

// Verify (checks signature + expiration)
const payload = jwtAuth.verifyToken(token);

// Decode (no verification, just extraction)
const decodedData = jwtAuth.decodeToken(token);
```

### View User Tokens History
```javascript
const userTokens = tokenManager.getUserTokens('username');
console.log(`User has ${userTokens.length} active sessions`);

userTokens.forEach(token => {
    console.log(`Issued: ${token.issuedAt}`);
    console.log(`Expires: ${token.expiresAt}`);
    console.log(`Revoked: ${token.revoked}`);
});
```

### Revoke a Token
```javascript
const tokens = tokenManager.getUserTokens('username');
const jti = tokens[0].jti;

tokenManager.revokeToken(jti);
console.log('Token revoked');
```

## Integration with Application

### HTML Files Updated
All HTML files have been updated to include `auth.js` before other scripts:

```html
<script src="auth.js"></script>
<script src="application.js"></script>
<script src="pwa.js"></script>
```

### Application.js Integration
The following functions in `application.js` now use JWT:

- **handleSignup()** - Generates token on signup
- **handleLogin()** - Generates token on login
- **handleLogout()** - Clears token on logout

### Storage Keys
- `codepath_auth_token` - Current session token
- `codepath_auth_token_expires` - Token expiration time
- `codepath_tokens` - Token history list

## Security Notes

⚠️ **Frontend-Only Limitation**
This JWT implementation is suitable for **frontend-only applications**. For production with backend:

1. **Move JWT validation to backend** - Never trust tokens on frontend alone
2. **Use HTTPS** - Always encrypt token transmission
3. **Store sensitive data server-side** - Never store passwords in tokens
4. **Implement refresh token rotation** - Use separate refresh tokens
5. **Add rate limiting** - Prevent brute force attacks
6. **Use strong secret keys** - Change default secret in production

## Configuration

### Change Token Expiration
```javascript
// In auth.js, modify JWTAuth constructor
this.tokenExpiration = 7 * 24 * 60 * 60 * 1000; // 7 days
// Change to desired duration in milliseconds
```

### Change Secret Key
```javascript
// In auth.js, modify constructor
constructor(secret = 'codepath-secret-key-2026')
// Change to your secret key
```

## Supported Operations

✅ Token Generation  
✅ Token Verification  
✅ Token Refresh  
✅ Token Revocation  
✅ Expiration Checking  
✅ Token History Tracking  
✅ Automatic Cleanup  
✅ Session Management  

## Browser Compatibility

- Chrome/Edge: ✅ Full support
- Firefox: ✅ Full support
- Safari: ✅ Full support
- IE: ⚠️ Limited support (uses Base64, atob/btoa available in IE10+)

## Next Steps

1. ✅ JWT tokens are generated on login
2. ✅ Tokens expire after 7 days
3. ✅ Git ignore is configured
4. Consider adding token refresh endpoints if using backend
5. Monitor token expiration in application logs
6. Implement token cleanup routine for production

---

**Implementation Date**: February 15, 2026  
**Status**: ✅ Complete and Integrated
