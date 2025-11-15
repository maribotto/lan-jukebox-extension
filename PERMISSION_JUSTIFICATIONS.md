# Chrome Web Store Permission Justifications

Copy and paste these justifications into the Chrome Web Store submission form.

---

## activeTab Permission

**Justification:**

This permission is required to detect when the user is on a YouTube page and to read the current video's URL and title. The extension needs to:

1. Check if the active tab is a YouTube video page (youtube.com/watch or youtu.be)
2. Extract the video URL to send to the user's jukebox server
3. Display the video title in the extension popup for user confirmation before adding

Without this permission, the extension cannot identify which YouTube video the user wants to add to their jukebox playlist.

**User benefit:** Enables one-click adding of YouTube videos without manual URL copying.

---

## storage Permission

**Justification:**

This permission is required to save the user's jukebox server configuration settings locally on their device. The extension stores:

1. Jukebox server address (IP address and port)
2. Username (if authentication is enabled on the server)
3. Password (if authentication is enabled on the server)

These settings are stored using Chrome's encrypted storage API (chrome.storage.sync) to persist across browser sessions, so users don't have to re-enter their server details every time they use the extension.

**User benefit:** Saves time by remembering server settings between uses. All data is stored locally on the user's device only.

---

## host_permissions (http://*/* and https://*/*)

**Justification:**

This permission is required to communicate with the user's self-hosted LAN Jukebox server, which can be located at any IP address on their local network or internet. The extension needs to:

1. Send HTTP/HTTPS requests to the user-configured server address to add videos
2. Check authentication status on the server
3. Send login credentials if authentication is required
4. Automatically fallback from HTTP to HTTPS for connection flexibility

The server address is fully user-controlled and configured by the user. Common examples include:
- Local network: http://192.168.1.100:3000
- Custom domains: https://jukebox.example.com
- Localhost for testing: http://localhost:3000

Since users can host their jukebox server at any IP address or domain, the extension requires broad host permissions to function properly. The extension ONLY communicates with the specific server address that the user explicitly configures - it does not make requests to any other hosts.

**User benefit:** Allows flexible deployment of jukebox servers on any network while maintaining security through user-controlled configuration.

---

## Summary

All permissions are essential for core functionality:
- **activeTab**: Read YouTube video information
- **storage**: Remember user's server settings
- **host_permissions**: Connect to user's self-hosted jukebox server

The extension does not collect any user data or communicate with any external servers operated by the developers. All data stays on the user's device and their own jukebox server.
