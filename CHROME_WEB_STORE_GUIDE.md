# Chrome Web Store Publishing Guide

This guide will help you publish the LAN Jukebox Extension to the Chrome Web Store.

## Prerequisites

- [ ] Google account
- [ ] $5 USD for one-time developer registration fee
- [ ] Credit card for payment

## Step 1: Register as a Chrome Web Store Developer

1. Go to [Chrome Web Store Developer Dashboard](https://chrome.google.com/webstore/devconsole/)
2. Sign in with your Google account
3. Accept the Developer Agreement
4. Pay the $5 registration fee (one-time, lifetime)
5. Wait for payment confirmation

## Step 2: Setup GitHub Repositories (Required)

**IMPORTANT:** Before submitting to Chrome Web Store, you must:

1. Create GitHub repositories for both the extension and server
2. Update placeholder links `[YOUR_USERNAME]` in:
   - `STORE_DESCRIPTION.md`
   - `PRIVACY_POLICY.md`

See `SETUP_GITHUB_LINKS.md` for detailed instructions.

Chrome Web Store requires a privacy policy URL and benefits from having public source code links.

## Step 3: Prepare Your Submission

All required files are ready in this repository:

### Required Files ✅

- [x] **Extension ZIP** - `lan-jukebox-extension.zip` (in parent directory)
- [x] **Screenshots** - 3 images in `store-assets/screenshots/`
  - screenshot-1.png (1280x800)
  - screenshot-2.png (1280x800)
  - screenshot-3.png (1280x800)
- [x] **Promotional Images** - in `store-assets/`
  - promo-tile-small.png (440x280)
  - promo-tile-marquee.png (1400x560)
- [x] **Privacy Policy** - `PRIVACY_POLICY.md`
- [x] **Store Description** - `STORE_DESCRIPTION.md`

### Icons (Already in ZIP) ✅

- [x] icon16.png
- [x] icon48.png
- [x] icon128.png

## Step 4: Fill Out the Store Listing

### Product Details

**Name:**
```
LAN Jukebox - YouTube Adder
```

**Summary (132 characters max):**
```
Add YouTube videos to your LAN Jukebox playlist with one click - perfect for LAN parties and shared music queues!
```

**Description:**
Copy the content from `STORE_DESCRIPTION.md`

**Category:**
- Primary: **Productivity**
- Secondary: **Entertainment** (optional)

**Language:**
- English (United States)

### Graphic Assets

**Screenshots (Required - upload all 3):**
1. `store-assets/screenshots/screenshot-1.png` - Main popup
2. `store-assets/screenshots/screenshot-2.png` - Success state
3. `store-assets/screenshots/screenshot-3.png` - Authentication

**Small promo tile (440x280):**
- `store-assets/promo-tile-small.png`

**Marquee promo tile (1400x560):**
- `store-assets/promo-tile-marquee.png`

**Store icon (128x128):**
- Use `icons/icon128.png` from the extension

### Privacy Practices

**Single Purpose:**
```
This extension allows users to add YouTube videos to their self-hosted LAN Jukebox server with one click.
```

**Permission Justification:**

**activeTab:**
```
Required to detect when the user is on a YouTube page and to read the current video URL and title.
```

**storage:**
```
Required to save the user's jukebox server address and authentication credentials (if configured) for persistent use across browser sessions.
```

**host_permissions (http://*/* and https://*/* ):**
```
Required to communicate with the user's self-hosted jukebox server, which can be at any IP address on their local network.
```

**Remote Code:**
- No ❌

**Data Usage:**

Does this extension collect user data?
- **No** ❌

**Privacy Policy:**
Use your GitHub raw URL after pushing to repository:
```
https://raw.githubusercontent.com/YOUR_USERNAME/lan-jukebox-extension/main/PRIVACY_POLICY.md
```
Or host on your own website.

## Step 5: Distribution

**Visibility:**
- [x] Public (recommended for open source)
- [ ] Unlisted (only people with link)
- [ ] Private (only specific Google accounts)

**Regions:**
- Select "All regions" or specific countries

**Pricing:**
- Free

## Step 6: Upload the Extension

1. Click "New Item" in the Developer Dashboard
2. Upload `lan-jukebox-extension.zip`
3. Fill in all the details from above
4. Upload all screenshots and promotional images
5. Submit for review

## Step 7: Review Process

- **Review time:** Typically 1-3 business days (sometimes faster)
- **Status:** Check your Developer Dashboard
- **Email:** Google will email you when review is complete

### Possible Outcomes

✅ **Approved** - Your extension is live!
❌ **Rejected** - Review the feedback and fix issues

### Common Rejection Reasons

- Missing or unclear privacy policy
- Insufficient permission justifications
- Low-quality screenshots
- Misleading description

## Step 8: After Approval

Once approved:
- Your extension will be live on Chrome Web Store
- Share the link: `https://chrome.google.com/webstore/detail/[YOUR-EXTENSION-ID]`
- Update README.md with the store link
- Monitor reviews and user feedback

## Updating the Extension

To publish updates:
1. Update version in `manifest.json`
2. Create new ZIP
3. Upload to Developer Dashboard
4. Submit for review (usually faster than initial review)

## Checklist Before Submission

- [ ] Tested extension in Chrome/Brave
- [ ] All screenshots look good
- [ ] Privacy policy is accessible online
- [ ] Store description is clear and accurate
- [ ] Version number is correct in manifest.json
- [ ] ZIP file contains correct files
- [ ] All promotional images uploaded
- [ ] Permission justifications written
- [ ] $5 registration fee paid

## Support Links

- Developer Dashboard: https://chrome.google.com/webstore/devconsole/
- Developer Program Policies: https://developer.chrome.com/docs/webstore/program-policies/
- Best Practices: https://developer.chrome.com/docs/webstore/best_practices/

---

**Good luck with your submission! 🚀**

If you encounter any issues, check the Chrome Web Store developer documentation or forums for help.
