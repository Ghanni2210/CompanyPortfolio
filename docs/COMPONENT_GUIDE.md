# Component Guide

## 📦 Available Components

### Button Component
**Location**: `src/components/common/Button.jsx`

```jsx
import Button from './components/common/Button';

// Default usage
<Button ariaLabel="Click me">
  Button Text
</Button>

// Compact size
<Button size="compact" ariaLabel="Small button">
  Small Button
</Button>

// With custom className
<Button className="mt-4" ariaLabel="Custom button">
  Custom Button
</Button>

// With onClick handler
<Button 
  onClick={() => console.log('Clicked!')}
  ariaLabel="Clickable button"
>
  Click Me
</Button>
```

**Props**:
- `children` - Button text content
- `onClick` - Click handler function
- `size` - 'default' | 'compact'
- `className` - Additional Tailwind classes
- `ariaLabel` - Accessibility label (required)

**Features**:
- ✅ Gradient background
- ✅ Arrow icon animations
- ✅ Hover effects
- ✅ Fully accessible

---

### Navbar Component
**Location**: `src/components/common/Navbar.jsx`

```jsx
import Navbar from './components/common/Navbar';

<Navbar />
```

**Features**:
- ✅ Sticky navigation
- ✅ Mobile hamburger menu
- ✅ Smooth scrolling to sections
- ✅ Responsive design
- ✅ Scroll-based blur effect
- ✅ Auto-close on link click

**Navigation Links**:
- Benefits
- Services
- Process
- Works
- Team
- Contact

---

### Hero Section
**Location**: `src/components/sections/Hero.jsx`

```jsx
import Hero from './components/sections/Hero';

<Hero />
```

**Features**:
- ✅ Animated badge
- ✅ Gradient heading
- ✅ Background pattern
- ✅ Social links (desktop sidebar + mobile)
- ✅ CTA button
- ✅ Responsive layout

**Social Links**:
- LinkedIn
- X (Twitter)
- Instagram
- Email

---

### Benefits Section
**Location**: `src/components/sections/Benefits.jsx`

```jsx
import Benefits from './components/sections/Benefits';

<Benefits />
```

**Features**:
- ✅ Scroll-triggered animations
- ✅ Three benefit cards
- ✅ Icon containers with terminal dots
- ✅ Hover effects
- ✅ Responsive grid

**Benefits Shown**:
1. Real-Time Intelligence
2. Measurable Impact
3. Seamless Integration

---

## 🎨 Styling Patterns

### Section Container
```jsx
<section className="py-24 bg-[#050505] text-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Content */}
  </div>
</section>
```

### Card Component
```jsx
<div className="bg-gradient-to-br from-[#2a2a2a] to-[#0a0a0a] border border-[#2a2a2a] hover:border-[#e87811]/50 transition-all duration-300 rounded-2xl p-8">
  {/* Card content */}
</div>
```

### Heading Pattern
```jsx
<h2 className="text-[38px] font-medium tracking-[-0.025em] leading-relaxed text-center text-white">
  Section Heading
</h2>
```

### Badge Pattern
```jsx
<p className="text-[14px] text-[#858585] font-manrope rounded-full border border-[#252525] bg-[#050505] px-4 py-1 inline-block">
  BADGE TEXT
</p>
```

---

## 🔧 Creating New Components

### Step 1: Create File
```bash
touch src/components/sections/YourSection.jsx
```

### Step 2: Component Template
```jsx
import React from 'react';

const YourSection = () => {
  return (
    <section id="your-section" className="py-24 bg-[#050505] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-[14px] text-[#858585] font-manrope rounded-full border border-[#252525] bg-[#050505] px-4 py-1 inline-block mb-5">
            SECTION BADGE
          </p>
          <h2 className="text-[38px] font-medium text-white mb-6">
            Section Title
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Section description
          </p>
        </div>

        {/* Section Content */}
        <div>
          {/* Your content here */}
        </div>
      </div>
    </section>
  );
};

export default YourSection;
```

### Step 3: Import in App.js
```jsx
import YourSection from './components/sections/YourSection';

// Add to JSX
<main>
  <Hero />
  <Benefits />
  <YourSection />
</main>
```

---

## 🎭 Animation Patterns

### Fade In on Scroll
```jsx
import { useInView } from 'react-intersection-observer';

const Component = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div 
      ref={ref}
      className={`transition-all duration-700 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      Content
    </div>
  );
};
```

### Staggered Animations
```jsx
{items.map((item, index) => (
  <div
    key={item.id}
    className="opacity-0 animate-fade-in"
    style={{ animationDelay: `${index * 100}ms` }}
  >
    {item.content}
  </div>
))}
```

### Hover Effects
```jsx
<div className="group">
  <div className="group-hover:scale-110 transition-transform">
    Icon
  </div>
  <h3 className="group-hover:text-[#e87811] transition-colors">
    Title
  </h3>
</div>
```

---

## 📱 Responsive Patterns

### Mobile-First Design
```jsx
<div className="text-sm md:text-base lg:text-lg xl:text-xl">
  Responsive Text
</div>
```

### Grid Layout
```jsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {/* Cards */}
</div>
```

### Show/Hide on Mobile
```jsx
{/* Desktop only */}
<div className="hidden lg:block">
  Desktop Content
</div>

{/* Mobile only */}
<div className="lg:hidden">
  Mobile Content
</div>
```

---

## 🎨 Color System

```jsx
// Backgrounds
bg-[#050505]          // Main dark background
bg-[#0a0a0a]          // Slightly lighter dark
bg-[#1a1a1a]          // Card background
bg-[#2a2a2a]          // Lighter card

// Text Colors
text-white            // Primary text
text-gray-400         // Secondary text
text-[#858585]        // Muted text
text-[#aaaaaa]        // Description text

// Brand Colors
text-[#e87811]        // Primary orange
bg-[#e87811]          // Primary orange background
border-[#e87811]      // Primary orange border

// Gradients
bg-gradient-to-r from-[#e87811] to-[#ff9500]
bg-gradient-to-br from-[#2a2a2a] to-[#0a0a0a]
```

---

## 🚀 Quick Reference

### Import Statement
```jsx
import React from 'react';
import Component from './path/to/Component';
```

### Export Statement
```jsx
export default ComponentName;
```

### Props Destructuring
```jsx
const Component = ({ prop1, prop2, children }) => {
  // Component logic
};
```

### Conditional Rendering
```jsx
{isVisible && <Component />}
{condition ? <ComponentA /> : <ComponentB />}
```

### Map Over Array
```jsx
{items.map((item, index) => (
  <div key={item.id}>{item.name}</div>
))}
```

---

**Last Updated**: December 2025
**Framework**: React 18 + Tailwind CSS
