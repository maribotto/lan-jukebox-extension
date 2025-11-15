// Background service worker for LAN Jukebox extension

// Normalize server URL by adding http:// if protocol is missing
function normalizeServerUrl(url) {
  url = url.trim();
  if (!url) return url;

  // If it doesn't start with http:// or https://, add http://
  if (!url.match(/^https?:\/\//i)) {
    url = 'http://' + url;
  }

  return url;
}

// Smart fetch that tries HTTPS if HTTP fails
async function smartFetch(url, options = {}) {
  try {
    const response = await fetch(url, options);
    return { response, finalUrl: url };
  } catch (error) {
    // If HTTP failed and URL starts with http://, try https://
    if (url.startsWith('http://')) {
      const httpsUrl = url.replace('http://', 'https://');
      console.log(`HTTP failed, trying HTTPS: ${httpsUrl}`);

      try {
        const response = await fetch(httpsUrl, options);
        return { response, finalUrl: httpsUrl };
      } catch (httpsError) {
        // Both failed, throw original error
        throw error;
      }
    }

    // Not HTTP or already HTTPS, throw original error
    throw error;
  }
}

// Add video to playlist
async function addVideoToPlaylist(videoUrl, videoTitle) {
  return new Promise((resolve, reject) => {
    chrome.storage.sync.get(['serverUrl', 'username', 'password'], async (data) => {
      try {
        let serverUrl = normalizeServerUrl(data.serverUrl);

        if (!serverUrl) {
          reject(new Error('Server address not configured. Please open the extension popup to configure.'));
          return;
        }

        // Check if authentication is required
        const { response: authStatusResponse, finalUrl: authUrl } = await smartFetch(`${serverUrl}/api/auth-status`, {
          credentials: 'include'
        });

        // Update serverUrl if HTTPS was used successfully
        if (authUrl !== `${serverUrl}/api/auth-status`) {
          serverUrl = authUrl.replace('/api/auth-status', '');
          chrome.storage.sync.set({ serverUrl });
          console.log(`Updated to HTTPS: ${serverUrl}`);
        }

        let needsAuth = false;
        let isAuthenticated = false;

        if (authStatusResponse.ok) {
          const authStatus = await authStatusResponse.json();
          needsAuth = authStatus.requireLogin;
          isAuthenticated = authStatus.authenticated;
        }

        // If auth is required and we're not authenticated, try to login
        if (needsAuth && !isAuthenticated) {
          const username = data.username?.trim();
          const password = data.password?.trim();

          if (!username || !password) {
            reject(new Error('Authentication required! Please configure credentials in the extension popup.'));
            return;
          }

          // Try to login
          const { response: loginResponse } = await smartFetch(`${serverUrl}/api/login`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify({ username, password })
          });

          if (!loginResponse.ok) {
            reject(new Error('Login failed! Check your credentials in the extension popup.'));
            return;
          }
        }

        // Now add the video
        const { response } = await smartFetch(`${serverUrl}/api/add`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          credentials: 'include',
          body: JSON.stringify({
            videoUrl: videoUrl
          })
        });

        const result = await response.json();

        if (response.ok && result.success) {
          resolve(result.video.title || videoTitle);
        } else {
          reject(new Error(result.message || 'Unknown error'));
        }
      } catch (error) {
        console.error('Error adding video:', error);
        reject(error);
      }
    });
  });
}

// Listen for keyboard command
chrome.commands.onCommand.addListener(async (command) => {
  if (command === 'add-to-playlist') {
    try {
      // Get the active tab
      const tabs = await chrome.tabs.query({ active: true, currentWindow: true });
      const tab = tabs[0];

      if (!tab || !tab.url) {
        chrome.notifications.create({
          type: 'basic',
          iconUrl: 'icons/icon48.png',
          title: 'LAN Jukebox',
          message: 'No active tab found'
        });
        return;
      }

      // Check if it's a YouTube video page
      const youtubeRegex = /^https?:\/\/(www\.)?(youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]+)/;
      const match = tab.url.match(youtubeRegex);

      if (!match) {
        chrome.notifications.create({
          type: 'basic',
          iconUrl: 'icons/icon48.png',
          title: 'LAN Jukebox',
          message: 'This is not a YouTube video page'
        });
        return;
      }

      // Add the video to playlist
      const videoTitle = await addVideoToPlaylist(tab.url, tab.title);

      // Show success notification
      chrome.notifications.create({
        type: 'basic',
        iconUrl: 'icons/icon48.png',
        title: 'LAN Jukebox',
        message: `Added: ${videoTitle}`
      });
    } catch (error) {
      // Show error notification
      chrome.notifications.create({
        type: 'basic',
        iconUrl: 'icons/icon48.png',
        title: 'LAN Jukebox Error',
        message: error.message
      });
    }
  }
});

console.log('LAN Jukebox background service worker loaded');
