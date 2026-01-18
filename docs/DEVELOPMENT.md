# Development Guide

## Getting Started

### Prerequisites
- Node.js 14+ installed
- npm or yarn package manager
- Code editor (VS Code recommended)

### Initial Setup
```bash
cd "the-quick-ai"
npm install
npm start
```

## Project Architecture

### Component Structure
- **Common Components** (`src/components/common/`) - Reusable UI elements
- **Section Components** (`src/components/sections/`) - Page sections
- **Hooks** (`src/hooks/`) - Custom React hooks
- **Utils** (`src/utils/`) - Helper functions
- **Data** (`src/data/`) - Static data and constants

### Naming Conventions
- Components: PascalCase (e.g., `Button.jsx`, `HeroSection.jsx`)
- Hooks: camelCase with 'use' prefix (e.g., `useScrollAnimation.js`)
- Utils: camelCase (e.g., `formatDate.js`)
- Constants: UPPER_SNAKE_CASE (e.g., `API_ENDPOINTS.js`)

## Creating New Components

### Basic Component Template
```jsx
import React from 'react';

const ComponentName = ({ prop1, prop2 }) => {
  return (
    <div className="your-tailwind-classes">
      {/* Component content */}
    </div>
  );
};

export default ComponentName;
```

### Component with State
```jsx
import React, { useState, useEffect } from 'react';

const ComponentName = () => {
  const [state, setState] = useState(initialValue);

  useEffect(() => {
    // Side effects
  }, [dependencies]);

  return (
    <div>
      {/* Component content */}
    </div>
  );
};

export default ComponentName;
```

## Tailwind CSS Guidelines

### Custom Classes
- Use Tailwind utility classes first
- Create custom classes in `index.css` only when necessary
- Follow the BEM naming convention for custom classes

### Responsive Design
```jsx
<div className="text-sm md:text-base lg:text-lg">
  Responsive text
</div>
```

### Color Usage
- Background: `bg-dark` or `bg-[#050505]`
- Primary: `text-primary` or `bg-primary`
- Text: `text-white`, `text-gray-400`, etc.

## State Management

### Local State
Use `useState` for component-level state:
```jsx
const [isOpen, setIsOpen] = useState(false);
```

### Future: Context API
For global state, create context providers in `src/context/`

## Styling Patterns

### Container
```jsx
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  {/* Content */}
</div>
```

### Card
```jsx
<div className="bg-gradient-to-br from-[#2a2a2a] to-[#0a0a0a] border border-[#2a2a2a] rounded-2xl p-8">
  {/* Card content */}
</div>
```

### Button
Use the `Button` component:
```jsx
<Button onClick={handleClick} ariaLabel="Description">
  Button Text
</Button>
```

## Animation Guidelines

### CSS Animations
- Use Tailwind animation classes: `animate-fade-in`, `animate-pulse`
- Custom animations in `tailwind.config.js`

### Future: Framer Motion
```jsx
import { motion } from 'framer-motion';

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  Content
</motion.div>
```

## Performance Best Practices

1. **Lazy Loading**
```jsx
const LazyComponent = React.lazy(() => import('./Component'));
```

2. **Memoization**
```jsx
const MemoizedComponent = React.memo(Component);
```

3. **useCallback for Functions**
```jsx
const memoizedCallback = useCallback(() => {
  doSomething(a, b);
}, [a, b]);
```

4. **useMemo for Expensive Calculations**
```jsx
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
```

## Accessibility

### ARIA Labels
Always provide aria-label for interactive elements:
```jsx
<button aria-label="Close menu">
  <CloseIcon />
</button>
```

### Semantic HTML
Use proper HTML5 semantic tags:
- `<nav>` for navigation
- `<main>` for main content
- `<section>` for sections
- `<article>` for independent content

### Keyboard Navigation
Ensure all interactive elements are keyboard accessible:
```jsx
<div
  role="button"
  tabIndex={0}
  onClick={handleClick}
  onKeyPress={handleKeyPress}
>
  Interactive element
</div>
```

## Testing

### Component Testing Template
```jsx
import { render, screen } from '@testing-library/react';
import Component from './Component';

test('renders component', () => {
  render(<Component />);
  const element = screen.getByText(/text/i);
  expect(element).toBeInTheDocument();
});
```

## Git Workflow

### Branch Naming
- Feature: `feature/component-name`
- Bug fix: `fix/bug-description`
- Hotfix: `hotfix/critical-issue`

### Commit Messages
```
feat: Add hero section component
fix: Resolve mobile menu navigation issue
style: Update button hover effects
docs: Add development guide
```

## Build and Deployment

### Production Build
```bash
npm run build
```

### Testing Production Build Locally
```bash
npm install -g serve
serve -s build
```

## Troubleshooting

### Common Issues

1. **Tailwind styles not applying**
   - Check `tailwind.config.js` content paths
   - Restart dev server

2. **Module not found**
   - Run `npm install`
   - Check import paths

3. **Styles not updating**
   - Clear browser cache
   - Restart development server

## Additional Resources

- [React Documentation](https://reactjs.org/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [MDN Web Docs](https://developer.mozilla.org/)

---

**Last Updated**: December 2025
