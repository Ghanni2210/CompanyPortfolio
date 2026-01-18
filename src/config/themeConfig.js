// Theme Configuration Utility
// This file provides helper functions for managing theme colors

import siteConfig from './siteConfig';

/**
 * Get CSS variable for a theme color
 * @param {string} colorName - Name of the color from theme config
 * @returns {string} CSS color value
 */
export const getThemeColor = (colorName) => {
  return siteConfig.theme[colorName] || '#000000';
};

/**
 * Get all theme colors as CSS variables object
 * @returns {object} Object with CSS variable names and values
 */
export const getThemeVars = () => {
  return Object.entries(siteConfig.theme).reduce((acc, [key, value]) => {
    acc[`--color-${key}`] = value;
    return acc;
  }, {});
};

/**
 * Apply theme colors to document root
 * Call this in your main App component
 */
export const applyThemeColors = () => {
  const root = document.documentElement;
  const themeVars = getThemeVars();

  Object.entries(themeVars).forEach(([variable, value]) => {
    root.style.setProperty(variable, value);
  });
};

/**
 * Get gradient background for primary colors
 * @returns {string} CSS gradient string
 */
export const getPrimaryGradient = () => {
  return `linear-gradient(to right, ${getThemeColor('primary')}, ${getThemeColor('primaryLight')})`;
};

/**
 * Theme configuration object for easy access
 */
export const theme = {
  colors: siteConfig.theme,
  gradients: {
    primary: getPrimaryGradient(),
    primaryWithOpacity: `linear-gradient(to right, ${getThemeColor('primary')}20, ${getThemeColor('primaryLight')}20)`,
  },
  spacing: {
    section: 'py-24',
    container: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
  },
  borderRadius: {
    small: 'rounded-lg',
    medium: 'rounded-xl',
    large: 'rounded-2xl',
    xlarge: 'rounded-3xl',
    full: 'rounded-full',
  },
  transitions: {
    default: 'transition-all duration-300',
    fast: 'transition-all duration-200',
    slow: 'transition-all duration-500',
  },
};

export default theme;
