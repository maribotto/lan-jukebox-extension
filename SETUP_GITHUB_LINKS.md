# Setup GitHub Links

After creating GitHub repositories, replace placeholder links with your actual repository URLs.

## Quick Find & Replace

Replace `[YOUR_USERNAME]` with your GitHub username in these files:

### Files to Update:
1. `STORE_DESCRIPTION.md` (4 occurrences)
2. `PRIVACY_POLICY.md` (4 occurrences)

### Using sed (Linux/Mac):

```bash
# Replace [YOUR_USERNAME] with your actual GitHub username
# For example, if your username is "johndoe":

sed -i 's/\[YOUR_USERNAME\]/johndoe/g' STORE_DESCRIPTION.md
sed -i 's/\[YOUR_USERNAME\]/johndoe/g' PRIVACY_POLICY.md
```

### Manual Update:

Find all instances of:
```
https://github.com/[YOUR_USERNAME]/lan-jukebox-extension
https://github.com/[YOUR_USERNAME]/lan-jukebox
```

Replace with:
```
https://github.com/YOUR_ACTUAL_USERNAME/lan-jukebox-extension
https://github.com/YOUR_ACTUAL_USERNAME/lan-jukebox
```

## Creating GitHub Repositories

### 1. Extension Repository

```bash
cd /home/kaanders/lan-jukebox-extension
git remote add origin https://github.com/YOUR_USERNAME/lan-jukebox-extension.git
git branch -M main
git push -u origin main
```

### 2. Server Repository

```bash
cd /home/kaanders/lan-jukebox
git remote add origin https://github.com/YOUR_USERNAME/lan-jukebox.git
git branch -M main
git push -u origin main
```

## After Pushing to GitHub

1. Update the placeholder links in the files mentioned above
2. Commit the changes:
   ```bash
   git add STORE_DESCRIPTION.md PRIVACY_POLICY.md
   git commit -m "Update GitHub repository links"
   git push
   ```

3. Update distribution package:
   ```bash
   # Copy updated files to distribution folder
   cp STORE_DESCRIPTION.md PRIVACY_POLICY.md ../lan-jukebox-extension-distribution/
   ```

## Verification

After updating, verify links work:
- Visit extension repository: `https://github.com/YOUR_USERNAME/lan-jukebox-extension`
- Visit server repository: `https://github.com/YOUR_USERNAME/lan-jukebox`
- Check issues page: `https://github.com/YOUR_USERNAME/lan-jukebox-extension/issues`

---

**Note:** Remember to make the repositories public so Chrome Web Store reviewers can access them!
