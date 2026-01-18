# Admin Panel Guide

Complete guide to using the Admin Panel for managing your website configuration.

## 🎯 Overview

The Admin Panel is a secure, web-based interface for managing all website content without editing code files directly.

## 🚀 Quick Start

### Step 1: Start the Server

```bash
# Navigate to admin directory
cd admin

# Run the start script
./start-admin.sh    # macOS/Linux
# or
start-admin.bat     # Windows
```

The server will start on **http://localhost:3001**

### Step 2: Open the Admin Panel

Open `admin/client/src/index.html` in your web browser.

Or serve it locally:
```bash
cd admin/client/src
python3 -m http.server 8000
# Then visit: http://localhost:8000
```

### Step 3: Login

**Default Credentials:**
- **Username:** admin
- **Password:** admin123

⚠️ **IMPORTANT:** Change the password immediately after first login!

## 📋 Features

### What You Can Manage

| Section | What You Can Change |
|---------|---------------------|
| **Brand** | Company name, tagline, description |
| **Contact** | Email, phone number, display format |
| **Social Media** | All social platform links |
| **Hero** | Badge, title, subtitle, CTA text |
| **Team** | Section title, description |
| **SEO** | Page title, description, keywords |
| **Theme** | All color codes |
| **Backups** | View and restore backups |

### Security Features

✅ JWT-based authentication
✅ Password hashing (bcrypt)
✅ Token expiration (24 hours)
✅ Secure file access
✅ Input validation

## 🎨 Using the Admin Panel

### Login Screen

![Login Screen]
- Clean, modern interface
- Shows default credentials
- Error messages for failed login

### Dashboard

**Header:**
- Logo and title
- Welcome message with username
- Logout button

**Sidebar:**
- Section navigation
- Active section highlighted
- Icon-based menu

**Main Area:**
- Section-specific forms
- Save buttons
- Success/error messages

## 📖 Section Guides

### Brand Information

**Fields:**
- Brand Name (text)
- Tagline (text)
- Description (textarea)

**Steps:**
1. Click "Brand" in sidebar
2. Update fields
3. Click "Save Changes"
4. See success message

**Impact:**
- Updates navbar
- Updates footer
- Updates meta tags
- Updates copyright

### Contact Information

**Fields:**
- Email (email)
- Phone (text with country code)
- Phone Display (formatted display)

**Steps:**
1. Click "Contact" in sidebar
2. Update email and phone
3. Click "Save Changes"

**Impact:**
- Updates footer contact
- Updates hero section
- Updates mailto links
- Updates tel links

### Social Media

**Fields:**
- LinkedIn URL
- Twitter URL
- Instagram URL
- GitHub URL
- Facebook URL
- YouTube URL

**Steps:**
1. Click "Social Media" in sidebar
2. Update platform URLs
3. Click "Save Changes"

**Tips:**
- Use full URLs (https://...)
- Leave as '#' if not used
- Test links after saving

### Hero Section

**Fields:**
- Badge Text
- Title Line 1
- Title Line 2
- Title Line 3
- Subtitle
- CTA Button Text

**Steps:**
1. Click "Hero" in sidebar
2. Update any fields
3. Click "Save Changes"

**Tips:**
- Keep title lines concise
- Subtitle max 100 characters
- CTA text should be action-oriented

### Team Settings

**Fields:**
- Section Badge
- Section Title
- Section Description

**Note:** Team members are managed in the config file.

**Steps:**
1. Click "Team" in sidebar
2. Update section settings
3. Click "Save Changes"

**Future:** Full team member CRUD coming soon!

### SEO Settings

**Fields:**
- Page Title (60 chars max recommended)
- Meta Description (155 chars max)
- Keywords (comma-separated)
- Author
- Open Graph Image URL

**Steps:**
1. Click "SEO" in sidebar
2. Update fields
3. Watch character counter
4. Click "Save Changes"

**Tips:**
- Keep description under 155 characters
- Use relevant keywords
- Update OG image URL when changing images

### Theme Colors

**Fields:**
- Primary
- Primary Light
- Dark
- Dark Secondary
- Gray
- Light Gray
- Border

**Interface:**
- Color picker for visual selection
- Text input for hex codes
- Real-time sync between picker and input

**Steps:**
1. Click "Theme" in sidebar
2. Use color picker or enter hex code
3. Click "Save Changes"
4. **Refresh main website** to see changes

**Note:** Theme changes require page reload on main site.

### Backups

**Features:**
- View all backups with timestamps
- Restore from any backup
- Automatic backup on every save

**Steps to Restore:**
1. Click "Backups" in sidebar
2. Find desired backup
3. Click "Restore"
4. Confirm action
5. Refresh main website

**Backup Naming:**
```
siteConfig-YYYY-MM-DDTHH-MM-SS-sssZ.js
```

## 🔒 Security

### Changing Password

**Steps:**
1. Login to admin panel
2. (Feature coming soon)
3. Or manually edit `admin/data/users.json`

### Changing JWT Secret

**For Production:**
1. Edit `admin/server/index.js`
2. Change `JWT_SECRET` variable
3. Restart server

```javascript
const JWT_SECRET = 'your-super-secret-key-here';
```

### Securing the Admin Panel

**Recommendations:**
1. Change default password
2. Change JWT secret
3. Use HTTPS in production
4. Restrict network access
5. Use strong passwords
6. Regular backups (automatic)

## 🔧 Technical Details

### API Endpoints

**Authentication:**
```
POST /api/auth/login
GET  /api/auth/me
POST /api/auth/change-password
```

**Configuration:**
```
GET   /api/config
PUT   /api/config
PATCH /api/config/:section
```

**Backups:**
```
GET  /api/backups
POST /api/backups/restore
```

**Health:**
```
GET /api/health
```

### Data Flow

```
User Action
    ↓
Frontend Form
    ↓
API Call (REST)
    ↓
Express Backend
    ↓
Read/Write Config File
    ↓
Create Backup
    ↓
Return Response
    ↓
Update UI
```

### File Storage

**User Data:**
- Location: `admin/data/users.json`
- Format: JSON
- Contains: Hashed passwords

**Config Data:**
- Location: `src/config/siteConfig.js`
- Format: JavaScript module
- Contains: All website config

**Backups:**
- Location: `admin/data/backups/`
- Format: JavaScript files
- Naming: Timestamped

## 🐛 Troubleshooting

### Can't Login

**Problem:** "Invalid credentials" error

**Solutions:**
1. Check username/password
2. Try default: admin/admin123
3. Delete `admin/data/users.json`
4. Restart server (recreates default user)

### Server Won't Start

**Problem:** Port 3001 in use

**Solutions:**
```bash
# Kill process on port
lsof -ti:3001 | xargs kill -9

# Or change port in server/index.js
const PORT = 3002;
```

### Changes Not Saving

**Problem:** Save button not working

**Solutions:**
1. Check browser console for errors
2. Verify server is running
3. Check file permissions
4. Try refreshing the page

### CORS Errors

**Problem:** Cross-origin errors in console

**Solutions:**
1. Serve frontend from local server
2. Use same origin for both
3. Check browser console for details

### Backups Not Showing

**Problem:** No backups in list

**Solutions:**
1. Click "Refresh" button
2. Make a config change (creates backup)
3. Check `admin/data/backups/` folder

## 💡 Best Practices

### 1. Regular Backups
- Automatic on every save
- Download important backups
- Keep offline copies

### 2. Test Changes
- Make changes in dev first
- Test on main website
- Verify everything works

### 3. Descriptive Content
- Clear, concise descriptions
- Proper formatting
- No special characters in critical fields

### 4. SEO Optimization
- Keep meta descriptions under 155 chars
- Use relevant keywords
- Update page titles appropriately

### 5. Security
- Change default password
- Don't share credentials
- Log out when done
- Use strong passwords

## 📊 Workflow Examples

### Updating Brand Name

```
1. Login to admin panel
2. Click "Brand" in sidebar
3. Change "Brand Name" to "New Name"
4. Click "Save Changes"
5. See success message
6. Go to main website
7. Refresh page
8. See new brand name everywhere
```

### Changing Contact Email

```
1. Login to admin panel
2. Click "Contact" in sidebar
3. Update "Email" field
4. Click "Save Changes"
5. Verify in footer of main site
```

### Restoring from Backup

```
1. Login to admin panel
2. Click "Backups" in sidebar
3. Find backup from desired time
4. Click "Restore" button
5. Confirm the action
6. Wait for success message
7. Refresh main website
8. Verify restored content
```

## 🎓 Tips & Tricks

### Keyboard Shortcuts
- `Tab` - Navigate between fields
- `Enter` - Submit form (in most forms)
- `Esc` - (Feature coming soon)

### Color Codes
- Use hex codes: #RRGGBB
- Test colors with picker
- Keep contrast in mind
- Save original theme colors

### Form Validation
- Required fields marked
- Format validation (email, URL)
- Character limits enforced
- Real-time feedback

### Success Messages
- Appear after save
- Auto-hide after 3 seconds
- Green for success
- Red for errors

## 🔄 Updates & Maintenance

### Updating Dependencies

```bash
cd admin/server
npm update
```

### Checking for Issues

```bash
npm audit
npm audit fix
```

### Server Logs

Watch server console for:
- Login attempts
- Config changes
- Errors
- API calls

## 📚 Additional Resources

- [Main Configuration Guide](./CONFIGURATION.md)
- [Quick Reference](./QUICK_REFERENCE.md)
- [Admin README](../admin/README.md)

## ⚠️ Important Notes

1. **File-Based** - All data stored in files
2. **Single User** - One admin account
3. **No Encryption** - Files stored in plain text
4. **Local Use** - Designed for internal use
5. **Backup First** - Always verify backups work

## 🆘 Getting Help

**Can't find something?**
1. Check this guide
2. Check Admin README
3. Check server console
4. Check browser console
5. Review the code

**Common Questions:**

**Q: Can I add more users?**
A: Not yet, single user for now. Edit users.json to add more.

**Q: Is it secure?**
A: Yes for local use. Use HTTPS and additional security for production.

**Q: Do I need a database?**
A: No! Everything is file-based.

**Q: Can I customize the UI?**
A: Yes! Edit `admin/client/src/index.html`

**Q: Will changes break my site?**
A: No, backups are automatic. You can always restore.

---

**Happy Managing!** 🎉

*Last Updated: December 2024*
