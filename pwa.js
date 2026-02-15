/* ============================================
   PWA FUNCTIONALITY - Service Worker Registration & Install
   ============================================ */

let deferredPrompt;
let swRegistration = null;

// Initialize PWA on page load
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        initServiceWorker();
        checkForUpdates();
        setupInstallPrompt();
        setupOfflineDetection();
    });
}

// ============================================
// SERVICE WORKER REGISTRATION
// ============================================
async function initServiceWorker() {
    try {
        swRegistration = await navigator.serviceWorker.register('/sw.js', {
            scope: '/'
        });
        
        console.log('[PWA] Service Worker registered successfully:', swRegistration.scope);
        
        // Check for updates periodically
        setInterval(() => {
            swRegistration.update();
        }, 60000); // Check every minute
        
        // Handle controller change
        navigator.serviceWorker.addEventListener('controllerchange', () => {
            console.log('[PWA] New Service Worker activated');
            showUpdateBanner();
        });
        
        // Listen for waiting service worker
        swRegistration.addEventListener('updatefound', () => {
            const newWorker = swRegistration.installing;
            
            newWorker.addEventListener('statechange', () => {
                if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                    // New service worker available
                    showUpdateBanner();
                }
            });
        });
        
    } catch (error) {
        console.error('[PWA] Service Worker registration failed:', error);
    }
}

// ============================================
// UPDATE BANNER
// ============================================
function showUpdateBanner() {
    const updateBanner = document.getElementById('updateBanner');
    if (updateBanner) {
        updateBanner.style.display = 'flex';
        
        const updateButton = document.getElementById('updateButton');
        if (updateButton) {
            updateButton.addEventListener('click', () => {
                // Tell the service worker to skip waiting
                if (swRegistration && swRegistration.waiting) {
                    swRegistration.waiting.postMessage({ type: 'SKIP_WAITING' });
                }
                window.location.reload();
            });
        }
    }
}

function checkForUpdates() {
    if (swRegistration) {
        swRegistration.update();
    }
}

// ============================================
// INSTALL PROMPT
// ============================================
function setupInstallPrompt() {
    // Capture the beforeinstallprompt event
    window.addEventListener('beforeinstallprompt', (e) => {
        console.log('[PWA] beforeinstallprompt event fired');
        
        // Prevent the default prompt
        e.preventDefault();
        
        // Store the event for later use
        deferredPrompt = e;
        
        // Show custom install banner
        showInstallBanner();
    });
    
    // Handle app installed event
    window.addEventListener('appinstalled', () => {
        console.log('[PWA] App installed successfully');
        deferredPrompt = null;
        hideInstallBanner();
        
        // Show success message
        showNotification('App Installed!', 'CodePath has been installed successfully 🎉');
    });
}

function showInstallBanner() {
    const installBanner = document.getElementById('installBanner');
    if (installBanner && !isAppInstalled()) {
        installBanner.style.display = 'flex';
        
        const installButton = document.getElementById('installButton');
        const dismissButton = document.getElementById('dismissInstall');
        
        if (installButton) {
            installButton.addEventListener('click', async () => {
                if (deferredPrompt) {
                    // Show the install prompt
                    deferredPrompt.prompt();
                    
                    // Wait for the user's response
                    const { outcome } = await deferredPrompt.userChoice;
                    console.log(`[PWA] User response: ${outcome}`);
                    
                    // Clear the deferred prompt
                    deferredPrompt = null;
                    
                    if (outcome === 'accepted') {
                        hideInstallBanner();
                    }
                }
            });
        }
        
        if (dismissButton) {
            dismissButton.addEventListener('click', () => {
                hideInstallBanner();
                // Remember dismissal for 7 days
                localStorage.setItem('installBannerDismissed', Date.now());
            });
        }
        
        // Check if banner was previously dismissed
        const dismissedTime = localStorage.getItem('installBannerDismissed');
        if (dismissedTime) {
            const daysSinceDismissed = (Date.now() - parseInt(dismissedTime)) / (1000 * 60 * 60 * 24);
            if (daysSinceDismissed < 7) {
                hideInstallBanner();
            }
        }
    }
}

function hideInstallBanner() {
    const installBanner = document.getElementById('installBanner');
    if (installBanner) {
        installBanner.style.display = 'none';
    }
}

function isAppInstalled() {
    // Check if running in standalone mode (iOS)
    if (window.navigator.standalone === true) {
        return true;
    }
    
    // Check if running in standalone mode (Android)
    if (window.matchMedia('(display-mode: standalone)').matches) {
        return true;
    }
    
    return false;
}

// ============================================
// OFFLINE DETECTION
// ============================================
function setupOfflineDetection() {
    window.addEventListener('online', () => {
        console.log('[PWA] Back online');
        hideOfflineIndicator();
        showNotification('Back Online!', 'Your internet connection has been restored');
    });
    
    window.addEventListener('offline', () => {
        console.log('[PWA] Gone offline');
        showOfflineIndicator();
        showNotification('Offline Mode', 'You can continue learning - progress will be saved locally');
    });
    
    // Check initial state
    if (!navigator.onLine) {
        showOfflineIndicator();
    }
}

function showOfflineIndicator() {
    const indicator = document.getElementById('offlineIndicator');
    if (indicator) {
        indicator.style.display = 'flex';
    }
}

function hideOfflineIndicator() {
    const indicator = document.getElementById('offlineIndicator');
    if (indicator) {
        indicator.style.display = 'none';
    }
}

// ============================================
// NOTIFICATIONS
// ============================================
function showNotification(title, message) {
    // Check if browser supports notifications
    if (!('Notification' in window)) {
        console.log('[PWA] Browser does not support notifications');
        return;
    }
    
    // Check permission
    if (Notification.permission === 'granted') {
        sendNotification(title, message);
    } else if (Notification.permission !== 'denied') {
        Notification.requestPermission().then(permission => {
            if (permission === 'granted') {
                sendNotification(title, message);
            }
        });
    }
}

function sendNotification(title, message) {
    if (swRegistration) {
        swRegistration.showNotification(title, {
            body: message,
            icon: '/icons/icon-192x192.png',
            badge: '/icons/icon-72x72.png',
            vibrate: [200, 100, 200],
            tag: 'codepath-notification',
            renotify: true
        });
    } else {
        // Fallback to regular notification
        new Notification(title, {
            body: message,
            icon: '/icons/icon-192x192.png'
        });
    }
}

// ============================================
// BACKGROUND SYNC (for future features)
// ============================================
async function requestBackgroundSync() {
    if ('sync' in swRegistration) {
        try {
            await swRegistration.sync.register('sync-progress');
            console.log('[PWA] Background sync registered');
        } catch (error) {
            console.error('[PWA] Background sync registration failed:', error);
        }
    }
}

// ============================================
// SHARE API (for sharing progress)
// ============================================
async function shareProgress(progressData) {
    if (navigator.share) {
        try {
            await navigator.share({
                title: 'My CodePath Progress',
                text: `I've completed ${progressData.percentage}% of my programming journey! 🚀`,
                url: window.location.origin
            });
            console.log('[PWA] Shared successfully');
        } catch (error) {
            console.log('[PWA] Share cancelled or failed:', error);
        }
    } else {
        // Fallback: Copy to clipboard
        const text = `I've completed ${progressData.percentage}% of my programming journey on CodePath! 🚀 ${window.location.origin}`;
        navigator.clipboard.writeText(text).then(() => {
            alert('Progress copied to clipboard!');
        });
    }
}

// ============================================
// PUSH NOTIFICATIONS (for reminders)
// ============================================
async function requestNotificationPermission() {
    if ('Notification' in window && 'serviceWorker' in navigator) {
        const permission = await Notification.requestPermission();
        
        if (permission === 'granted') {
            console.log('[PWA] Notification permission granted');
            subscribeToPushNotifications();
        }
    }
}

async function subscribeToPushNotifications() {
    if (!swRegistration) return;
    
    try {
        // This would require a VAPID key from your backend
        // Placeholder for future implementation
        console.log('[PWA] Push subscription ready (requires backend)');
    } catch (error) {
        console.error('[PWA] Push subscription failed:', error);
    }
}

// ============================================
// APP BADGE API (show unread count)
// ============================================
function updateAppBadge(count) {
    if ('setAppBadge' in navigator) {
        navigator.setAppBadge(count).catch(error => {
            console.error('[PWA] App badge update failed:', error);
        });
    }
}

function clearAppBadge() {
    if ('clearAppBadge' in navigator) {
        navigator.clearAppBadge().catch(error => {
            console.error('[PWA] App badge clear failed:', error);
        });
    }
}

// ============================================
// PERFORMANCE MONITORING
// ============================================
function logPerformanceMetrics() {
    if ('performance' in window) {
        window.addEventListener('load', () => {
            setTimeout(() => {
                const perfData = performance.getEntriesByType('navigation')[0];
                console.log('[PWA] Performance Metrics:', {
                    loadTime: perfData.loadEventEnd - perfData.loadEventStart,
                    domContentLoaded: perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart,
                    responseTime: perfData.responseEnd - perfData.requestStart
                });
            }, 0);
        });
    }
}

// Initialize performance monitoring
logPerformanceMetrics();

// ============================================
// EXPORT FUNCTIONS FOR USE IN APP
// ============================================
window.pwaFunctions = {
    showNotification,
    shareProgress,
    requestNotificationPermission,
    updateAppBadge,
    clearAppBadge,
    requestBackgroundSync,
    isAppInstalled
};
