# JWT & Git Setup - Quick Reference

## ✅ What Was Added

### 1. JWT Authentication System (auth.js)
- **JWTAuth class** - Core token operations
- **TokenManager class** - Session management  
- **Auto token refresh** - Refreshes tokens when <1 hour remains
- **Token history** - Tracks all active tokens per user
- **Token revocation** - Ability to manually revoke tokens

**Token Details:**
- Duration: 7 days
- Format: `header.payload.signature`
- Storage: localStorage
- Auto cleanup: Hourly

### 2. Git Ignore (.gitignore)
- Excludes node_modules
- Ignores .env files
- Blocks IDE files (.vscode, .idea)
- Prevents secrets.json from being tracked
- Ignores logs and temporary files

### 3. Updated Files
All HTML files now load JWT module:
- ✅ dashboard.html
- ✅ pwa-index.html
- ✅ pwa-dashboard.html
- ✅ pwa-admin.html

Application.js updated to:
- ✅ Generate token on signup
- ✅ Generate token on login
- ✅ Clear token on logout

## 🔐 How Tokens Work

### Sign Up / Login Flow
```
User signs up/logs in
    ↓
application.js generates JWT token
    ↓
tokenManager saves to localStorage
    ↓
User redirected to dashboard
    ↓
Token active for 7 days
```

### Authentication Check
```javascript
// Check if user is logged in
if (tokenManager.isAuthenticated()) {
    const user = tokenManager.getAuthenticatedUser();
    console.log(`Logged in as: ${user.name}`);
}

// Get token expiry time
const expiry = tokenManager.getTokenExpiry();
console.log(`Token expires in ${expiry.hours} hours`);

// Get user info from token
const userData = tokenManager.getTokenData();
```

## 📝 Token Stored Data

Each token contains:
```javascript
{
    username: "demo1",
    email: "demo@test.com",
    name: "Demo User",
    role: "student",
    iat: 1708100000,      // Issued at
    exp: 1708700000,      // Expires at
    jti: "jti_..."        // Unique ID
}
```

## 🚀 Key Functions

### Creating Tokens
```javascript
// Automatic on login/signup
tokenManager.saveToken(user);
```

### Verifying Tokens
```javascript
// Check validity
const isValid = tokenManager.isTokenValid();

// Get verified payload
const payload = tokenManager.verifyStoredToken();
```

### Managing Tokens
```javascript
// Get current token
const token = tokenManager.getToken();

// Refresh token
tokenManager.refreshStoredToken();

// Clear on logout
tokenManager.clearToken();

// Revoke a token
tokenManager.revokeToken(jti);

// View token history
const tokens = tokenManager.getUserTokens('username');
```

## 📊 Token Lifecycle

| State | Time | Action |
|-------|------|--------|
| Created | Day 0 | Token issued, expires in 7 days |
| Valid | Day 0-6 | User authenticated |
| Expiring | Day 6.5+ | Auto-refresh if active |
| Expired | Day 7+ | Cleared from storage |
| Revoked | Any time | Manually invalidated |

## 🛡️ Security Features

✅ HMAC-SHA256 signature verification  
✅ Timestamp validation (iat/exp)  
✅ Token expiration checking  
✅ Unique token IDs (jti)  
✅ Revocation support  
✅ Token history tracking  
✅ Auto cleanup of expired tokens  

⚠️ Note: This is a frontend-only implementation. For production, move JWT validation to backend.

## 📁 File Structure

```
d:\pwd raod map\
├── auth.js                 # JWT module (NEW)
├── .gitignore              # Git ignore rules (NEW)
├── application.js          # Updated with JWT
├── dashboard.html          # Updated with auth.js
├── pwa-index.html          # Updated with auth.js
├── pwa-dashboard.html      # Updated with auth.js
├── pwa-admin.html          # Updated with auth.js
├── JWT-SETUP.md            # Detailed documentation
├── style.css
├── pwa.js
├── sw.js
└── manifest.json
```

## 🔍 Testing JWT

### In Browser Console
```javascript
// Check authentication
tokenManager.isAuthenticated()  // true/false

// View token data
tokenManager.getTokenData()

// Check expiry
tokenManager.getTokenExpiry()

// Refresh token
tokenManager.refreshStoredToken()

// View all tokens
tokenManager.getTokenList()

// View user tokens
tokenManager.getUserTokens('demo1')
```

## ⚙️ Configuration

### Change Token Duration (in auth.js)
```javascript
this.tokenExpiration = 7 * 24 * 60 * 60 * 1000; // 7 days
// Change milliseconds for different duration
```

### Change Secret Key (in auth.js)
```javascript
constructor(secret = 'codepath-secret-key-2026')
// Use strong secret in production
```

## 🐛 Troubleshooting

| Issue | Solution |
|-------|----------|
| Token not persisting | Check localStorage not disabled |
| Token verification fails | Clear localStorage and re-login |
| Token expires too quickly | Verify system time is correct |
| Auth.js not loading | Check script load order in HTML |

## ✨ Next Steps

1. ✅ JWT tokens now generated on login
2. ✅ Git ignore configured for safety
3. Review Token-SETUP.md for advanced usage
4. Test token refresh mechanism
5. Monitor authentication in browser console
6. Consider backend token validation for production

---

**Created**: February 15, 2026  
**Status**: ✅ Ready to Use
