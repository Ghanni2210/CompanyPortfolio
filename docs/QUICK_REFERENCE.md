# Quick Reference Card

## 🎯 Common Tasks - Copy & Paste Ready

### Change Brand Name
```javascript
// File: src/config/siteConfig.js
brand: {
  name: 'Your Brand Name',  // ← Edit this
}
```

### Update Email
```javascript
// File: src/config/siteConfig.js
contact: {
  email: 'your@email.com',  // ← Edit this
}
```

### Update Phone
```javascript
// File: src/config/siteConfig.js
contact: {
  phone: '+1 234 567 8900',           // ← Edit this (for links)
  phoneDisplay: '+1 (234) 567-8900',  // ← Edit this (for display)
}
```

### Change Hero Text
```javascript
// File: src/config/siteConfig.js
hero: {
  badge: 'YOUR TAGLINE',              // ← Top badge
  title: {
    line1: 'First Line',              // ← Main headline line 1
    line2: 'Second Line',             // ← Main headline line 2
    line3: 'Third Line',              // ← Main headline line 3
  },
  subtitle: 'Your subtitle here',    // ← Subtitle
  ctaText: 'Your Button Text',       // ← Button text
}
```

### Update Social Media
```javascript
// File: src/config/siteConfig.js
social: {
  linkedin: 'https://linkedin.com/company/yourcompany',
  twitter: 'https://twitter.com/yourhandle',
  instagram: 'https://instagram.com/yourhandle',
}
```

### Add Team Member
```javascript
// File: src/config/siteConfig.js
// Add to team.members array:
{
  name: 'Full Name',
  role: 'Job Title',
  bio: 'Brief description about this person...',
  image: 'https://your-image-url.com/photo.jpg',
  linkedin: 'https://linkedin.com/in/profile',
  twitter: 'https://twitter.com/handle',
}
```

### Change Colors
```javascript
// File: src/config/siteConfig.js
theme: {
  primary: '#FF6600',      // ← Your main color
  primaryLight: '#FF9900', // ← Your accent color
}
```

### Hide/Show Sections
```javascript
// File: src/config/siteConfig.js
features_enabled: {
  showTeamSection: false,     // ← Set to false to hide
  showTestimonials: true,     // ← Set to true to show
}
```

### Update Navigation Menu
```javascript
// File: src/config/siteConfig.js
navigation: [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  // Add more items here
]
```

### Change Footer CTA
```javascript
// File: src/config/siteConfig.js
footer: {
  cta: {
    title: 'Your Call to Action Title',
    description: 'Your description here',
    primaryButton: 'Button 1 Text',
    secondaryButton: 'Button 2 Text',
  }
}
```

## 📂 File Locations

| What to Change | File Location |
|----------------|---------------|
| All website content | `src/config/siteConfig.js` |
| Theme utilities | `src/config/themeConfig.js` |
| Helper functions | `src/utils/configHelpers.js` |
| Environment variables | `.env.local` |

## 🔧 Development Commands

```bash
# Start development server
npm start

# Build for production
npm run build

# Run tests
npm test
```

## ✅ Pre-Deploy Checklist

- [ ] Updated brand name in all places
- [ ] Verified email address is correct
- [ ] Tested phone number links
- [ ] Checked all social media URLs
- [ ] Verified navigation links work
- [ ] Tested on mobile, tablet, and desktop
- [ ] Cleared browser cache and tested
- [ ] All images load correctly
- [ ] No console errors (F12 to check)

## 🚨 Emergency Rollback

If something breaks:

1. **Restore from backup**
   - Replace `src/config/siteConfig.js` with backup

2. **Or use Git**
   ```bash
   git checkout src/config/siteConfig.js
   ```

3. **Restart dev server**
   ```bash
   npm start
   ```

## 📞 Quick Access Values

```javascript
// Import and use anywhere in your components:
import siteConfig from '../../config/siteConfig';

// Get brand name
siteConfig.brand.name

// Get email
siteConfig.contact.email

// Get phone
siteConfig.contact.phone

// Get social link
siteConfig.social.linkedin

// Get navigation
siteConfig.navigation

// Get team members
siteConfig.team.members
```

## 🎨 Common Color Codes

For reference when changing theme colors:

| Color | Hex Code | Usage |
|-------|----------|-------|
| Orange (Current) | #e87811 | Primary brand color |
| Light Orange | #ff9500 | Accent/gradient |
| Dark Black | #050505 | Background |
| Medium Gray | #858585 | Text/borders |
| Light Gray | #afafaf | Subtle text |

## 🔗 Useful Links

- Full Guide: `CONFIGURATION.md`
- Detailed Config Guide: `CONFIG_GUIDE.md`
- Component Guide: `COMPONENT_GUIDE.md`
- Project Summary: `PROJECT_SUMMARY.md`

## 💡 Pro Tips

1. **Always backup before major changes**
2. **Test in development before deploying**
3. **Clear cache to see changes** (Cmd/Ctrl + Shift + R)
4. **Use browser dev tools** (F12) to debug
5. **Keep descriptions concise** for better UX

---

**Last Updated:** December 2024

*Need more help? Check CONFIGURATION.md for detailed instructions*
