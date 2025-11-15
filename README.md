# LAN Jukebox - YouTube Adder Extension

Chrome/Brave extension for adding YouTube videos directly to your LAN Jukebox playlist.

## Screenshots

<p align="center">
  <img src="store-assets/screenshots/screenshot-1.png" alt="Main popup interface" width="800">
  <br>
  <em>Main popup - Add videos with one click</em>
</p>

<p align="center">
  <img src="store-assets/screenshots/screenshot-2.png" alt="Success state" width="800">
  <br>
  <em>Success confirmation</em>
</p>

<p align="center">
  <img src="store-assets/screenshots/screenshot-3.png" alt="Authentication" width="800">
  <br>
  <em>Optional authentication support</em>
</p>

## Features

- Add YouTube videos to the jukebox with one click
- Supports authentication (if jukebox requires login)
- Automatically saves server settings
- Shows video information before adding
- Works with both Chrome and Brave
- Automatic HTTP/HTTPS fallback

## Installation

### 1. Install the extension in Chrome/Brave

1. Open Chrome or Brave
2. Go to `chrome://extensions/` (or `brave://extensions/`)
3. Enable **Developer mode** in the top right corner
4. Click **Load unpacked**
5. Select the `lan-jukebox-extension` folder
6. Done!

### 2. Configure the extension

1. Open any YouTube video
2. Click the extension icon in the browser toolbar (♪ icon)
3. Enter your LAN Jukebox server address, e.g., `192.168.50.200:3000` (http:// is added automatically)
4. If jukebox requires authentication, also enter username and password
5. Click **Save**

## Usage

1. Open a YouTube video you want to add to the jukebox
2. Click the extension icon
3. You'll see the video information in the popup window
4. Click **Add to Playlist**
5. The video is added to the jukebox queue!

## File Structure

```
lan-jukebox-extension/
├── manifest.json          # Extension manifest file
├── popup.html            # Popup UI
├── popup.js              # Popup logic
├── content.js            # Content script (for future use)
├── icons/                # Extension icons
│   ├── icon16.png
│   ├── icon48.png
│   └── icon128.png
└── README.md             # This file
```

## Compatibility

- Chrome 88+
- Brave (all versions supporting Manifest V3)
- Edge (Chromium-based)
- Other Chromium-based browsers

## Troubleshooting

### "Connection error" message

- Check that the LAN Jukebox server is running
- Verify the server address is correct
- Make sure the server is accessible on the network
- The extension will automatically try HTTPS if HTTP fails

### "Login failed" message

- Check your username and password
- Verify that `requireLogin: true` is set in the jukebox server's `config.json`

### Extension doesn't appear in browser toolbar

- Click the extensions icon (puzzle piece) and pin "LAN Jukebox" to the toolbar

## Chrome Web Store Publishing

Ready to publish to Chrome Web Store! See [CHROME_WEB_STORE_GUIDE.md](CHROME_WEB_STORE_GUIDE.md) for complete instructions.

**Quick links:**
- [Privacy Policy](PRIVACY_POLICY.md)
- [Store Description](STORE_DESCRIPTION.md)
- [Publishing Guide](CHROME_WEB_STORE_GUIDE.md)
- [Store Assets](store-assets/)

All required assets (screenshots, promotional tiles, etc.) are ready in the `store-assets/` directory.

## Distribution

### For End Users
Download `lan-jukebox-extension.zip` and install as unpacked extension (see Installation above).

### For Chrome Web Store
All publishing materials are ready:
- Extension package (.zip)
- 3 screenshots (1280x800)
- Promotional tiles (440x280 and 1400x560)
- Privacy policy
- Detailed description

## Future Ideas

- [ ] Add "Add to Jukebox" button directly on YouTube page
- [ ] Support adding entire playlists at once
- [ ] Keyboard shortcuts for adding videos
- [ ] Display queue status in popup window
- [ ] Support for multiple jukebox servers

## Privacy

This extension does NOT collect any user data. All settings are stored locally on your device. See [PRIVACY_POLICY.md](PRIVACY_POLICY.md) for details.

## License

ISC

## Author

Created for LAN parties!
