# Website Configuration Guide

This guide explains how to configure and customize your website using the centralized configuration system.

## Table of Contents
- [Overview](#overview)
- [Configuration File Location](#configuration-file-location)
- [Configuration Sections](#configuration-sections)
- [How to Update](#how-to-update)
- [Common Use Cases](#common-use-cases)

## Overview

All website content, branding, and settings are centralized in a single configuration file: `src/config/siteConfig.js`. This makes it easy to update your website without touching multiple component files.

## Configuration File Location

```
src/config/siteConfig.js
```

## Configuration Sections

### 1. Brand Information

```javascript
brand: {
  name: 'Kugan Venture',
  tagline: 'NEW GEN AI AUTOMATION PARTNER',
  description: 'Transforming businesses through intelligent automation...',
  logo: {
    primary: null,  // Add your logo URL here
    favicon: '/favicon.ico',
  },
}
```

**What it controls:**
- Company name displayed in navbar, footer, and throughout the site
- Brand tagline
- Company description in footer
- Logo URLs (when you add them)

### 2. Contact Information

```javascript
contact: {
  email: 'kuganventures51@gmail.com',
  phone: '+91 9967180067',
  phoneDisplay: '+91 9967180067',
  address: '',
}
```

**What it controls:**
- Email address for contact forms and mailto links
- Phone number with country code
- Display format for phone number
- Physical address (optional)

### 3. Social Media Links

```javascript
social: {
  linkedin: 'https://www.linkedin.com/company/...',
  twitter: 'https://x.com/...',
  instagram: 'https://www.instagram.com/...',
  github: '#',
  facebook: '#',
  youtube: '#',
}
```

**What it controls:**
- All social media links in hero section and footer
- Replace '#' with actual URLs when available

### 4. Website URLs

```javascript
urls: {
  primary: 'https://kuganventure.com',
  www: 'https://www.kuganventure.com',
}
```

**What it controls:**
- Primary website URL for SEO
- WWW version of the website

### 5. SEO Configuration

```javascript
seo: {
  title: 'Kugan Venture - AI-Powered Business Solutions',
  description: 'Transform your business...',
  keywords: 'AI automation,business automation...',
  author: 'Kugan Venture Team',
  ogImage: 'https://www.kuganventure.com/images/herosection.png',
}
```

**What it controls:**
- Page title (shows in browser tab)
- Meta description for search engines
- Keywords for SEO
- Author meta tag
- Open Graph image for social media sharing

### 6. Theme Colors

```javascript
theme: {
  primary: '#e87811',
  primaryLight: '#ff9500',
  dark: '#050505',
  darkSecondary: '#1a1a1a',
  gray: '#858585',
  lightGray: '#afafaf',
  border: '#585858',
}
```

**What it controls:**
- Primary brand color (orange)
- Accent colors
- Background colors
- Text colors
- Border colors

### 7. Hero Section

```javascript
hero: {
  badge: 'NEW GEN AI AUTOMATION PARTNER',
  title: {
    line1: 'Automate Smarter',
    line2: 'Grow ✦ Faster.',
    line3: 'Amplified With AI.',
  },
  subtitle: 'AI Automation for Modern Businesses Made Simple',
  ctaText: 'Book a free call',
}
```

**What it controls:**
- Hero badge text
- Main headline (split into 3 lines)
- Subtitle text
- Call-to-action button text

### 8. Navigation Links

```javascript
navigation: [
  { href: '#benefits', label: 'Benefits' },
  { href: '#services', label: 'Services' },
  { href: '#process', label: 'Process' },
  { href: '#success-stories', label: 'Works' },
  { href: '#team', label: 'Team' },
  { href: '#contact', label: 'Contact' },
]
```

**What it controls:**
- All navigation menu items
- Menu order
- Section IDs and labels

### 9. Footer Configuration

```javascript
footer: {
  cta: {
    title: 'Ready to Transform Your Business?',
    description: 'Join hundreds of businesses...',
    primaryButton: 'Get Started Free',
    secondaryButton: 'Schedule a Demo',
  },
  company: [...],
  services: [...],
  resources: [...],
  legal: [...],
}
```

**What it controls:**
- Footer CTA section
- All footer link columns
- Footer link organization

### 10. Team Members

```javascript
team: {
  sectionBadge: 'OUR TEAM',
  sectionTitle: 'Meet the Experts Behind the Innovation',
  sectionDescription: 'Our passionate team...',
  hiringText: "Want to join our team of innovators?",
  hiringButtonText: "We're Hiring!",
  members: [
    {
      name: 'Umang Sachdeva',
      role: 'CEO & Founder',
      bio: 'Visionary leader...',
      image: 'https://...',
      linkedin: '#',
      twitter: '#',
    },
    // ... more team members
  ],
}
```

**What it controls:**
- Team section heading and description
- All team member information
- Team member photos
- Social links for each team member
- Hiring message

### 11. Feature Flags

```javascript
features_enabled: {
  showTeamSection: true,
  showTestimonials: true,
  showBlog: false,
  showPricing: false,
  showChat: false,
  showNewsletter: false,
}
```

**What it controls:**
- Enable/disable entire sections
- Toggle features on/off without deleting code

### 12. Analytics & Tracking

```javascript
analytics: {
  googleAnalyticsId: '',     // Add your GA4 ID
  facebookPixelId: '',       // Add your FB Pixel ID
  linkedInInsightTag: '',    // Add your LinkedIn Tag
}
```

**What it controls:**
- Google Analytics tracking
- Facebook Pixel
- LinkedIn conversion tracking

## How to Update

### Updating Brand Name

1. Open `src/config/siteConfig.js`
2. Find the `brand` section
3. Update the `name` field:

```javascript
brand: {
  name: 'Your New Brand Name',
  // ...
}
```

4. Save the file - the change will reflect across the entire website

### Updating Contact Information

```javascript
contact: {
  email: 'newemail@example.com',
  phone: '+1 234 567 8900',
  phoneDisplay: '+1 (234) 567-8900',
}
```

### Adding a New Team Member

```javascript
team: {
  members: [
    // ... existing members
    {
      name: 'New Member Name',
      role: 'Position Title',
      bio: 'Brief description of the person',
      image: 'https://ui-avatars.com/api/?name=New+Member&size=256&background=e87811&color=fff&bold=true',
      linkedin: 'https://linkedin.com/in/...',
      twitter: 'https://twitter.com/...',
    },
  ],
}
```

### Updating Social Media Links

```javascript
social: {
  linkedin: 'https://www.linkedin.com/company/your-company',
  twitter: 'https://twitter.com/yourhandle',
  instagram: 'https://instagram.com/yourhandle',
  // ...
}
```

### Changing Hero Section Content

```javascript
hero: {
  badge: 'YOUR NEW TAGLINE',
  title: {
    line1: 'First Line of Title',
    line2: 'Second Line ✦ Here',
    line3: 'Third Line Here',
  },
  subtitle: 'Your new subtitle goes here',
  ctaText: 'Your CTA Button Text',
}
```

### Adding/Removing Navigation Items

```javascript
navigation: [
  { href: '#home', label: 'Home' },        // Add new item
  { href: '#about', label: 'About' },      // Add new item
  { href: '#services', label: 'Services' },
  // Remove items by deleting the line
]
```

## Common Use Cases

### 1. Rebranding the Entire Website

Update these key fields:
- `brand.name`
- `brand.description`
- `seo.title`
- `seo.author`
- `urls.primary`
- `urls.www`

### 2. Updating Contact Details

Update:
- `contact.email`
- `contact.phone`
- `contact.phoneDisplay`

### 3. Changing Color Scheme

Update the `theme` object with your new color values:

```javascript
theme: {
  primary: '#YOUR_PRIMARY_COLOR',
  primaryLight: '#YOUR_ACCENT_COLOR',
  // ...
}
```

Note: You may also need to update Tailwind classes in components for complete color changes.

### 4. Adding New Social Media Platform

1. Add to `social` object:
```javascript
social: {
  // ... existing platforms
  tiktok: 'https://tiktok.com/@yourhandle',
}
```

2. Update the Footer.jsx socialLinks array to include the new icon

### 5. Temporarily Hiding a Section

Use feature flags:

```javascript
features_enabled: {
  showTeamSection: false,  // Hides team section
}
```

Then wrap the section in the component:

```javascript
{siteConfig.features_enabled.showTeamSection && (
  <Team />
)}
```

## Best Practices

1. **Always backup** your config file before making major changes
2. **Test changes** in development before deploying to production
3. **Keep URLs consistent** - update all URL references when changing domain
4. **Validate email addresses** - ensure email format is correct
5. **Use absolute URLs** for images and external links
6. **Keep descriptions concise** - especially for SEO meta descriptions (155 characters max)
7. **Update all related fields** - when rebranding, update name, URLs, SEO, etc.

## Troubleshooting

### Changes not appearing?

1. Save the config file
2. Restart your development server
3. Clear browser cache
4. Check browser console for errors

### Broken links?

- Verify all `href` values start with `#` for internal links
- Verify all external links include `https://`
- Check that section IDs match navigation `href` values

### Images not loading?

- Verify image URLs are absolute (start with `https://`)
- Check image URLs are accessible
- Ensure image services (like ui-avatars) are working

## Support

For issues or questions:
- Check the main README.md file
- Review component files in `src/components/`
- Contact your development team

---

**Last Updated:** December 2024
