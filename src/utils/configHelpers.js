// Configuration Helper Utilities
// These utilities help work with the site configuration

import siteConfig from '../config/siteConfig';

/**
 * Get a configuration value by path
 * @param {string} path - Dot notation path (e.g., 'brand.name')
 * @param {any} defaultValue - Default value if path not found
 * @returns {any} Configuration value
 */
export const getConfig = (path, defaultValue = null) => {
  const keys = path.split('.');
  let value = siteConfig;

  for (const key of keys) {
    if (value && typeof value === 'object' && key in value) {
      value = value[key];
    } else {
      return defaultValue;
    }
  }

  return value;
};

/**
 * Get brand name
 * @returns {string} Brand name
 */
export const getBrandName = () => getConfig('brand.name', 'Company Name');

/**
 * Get contact email
 * @returns {string} Contact email
 */
export const getContactEmail = () => getConfig('contact.email', '');

/**
 * Get contact phone
 * @returns {string} Contact phone
 */
export const getContactPhone = () => getConfig('contact.phone', '');

/**
 * Get social media link
 * @param {string} platform - Platform name (linkedin, twitter, etc.)
 * @returns {string} Social media URL
 */
export const getSocialLink = (platform) => getConfig(`social.${platform}`, '#');

/**
 * Check if a feature is enabled
 * @param {string} featureName - Name of the feature
 * @returns {boolean} Whether feature is enabled
 */
export const isFeatureEnabled = (featureName) => {
  return getConfig(`features_enabled.${featureName}`, false);
};

/**
 * Get theme color
 * @param {string} colorName - Name of the color
 * @returns {string} Color hex value
 */
export const getThemeColor = (colorName) => {
  return getConfig(`theme.${colorName}`, '#000000');
};

/**
 * Get navigation items
 * @returns {Array} Navigation items
 */
export const getNavigation = () => getConfig('navigation', []);

/**
 * Get team members
 * @param {number} limit - Optional limit on number of members
 * @returns {Array} Team members
 */
export const getTeamMembers = (limit = null) => {
  const members = getConfig('team.members', []);
  return limit ? members.slice(0, limit) : members;
};

/**
 * Get footer links by category
 * @param {string} category - Category name (company, services, resources, legal)
 * @returns {Array} Footer links
 */
export const getFooterLinks = (category) => {
  return getConfig(`footer.${category}`, []);
};

/**
 * Get SEO metadata
 * @returns {object} SEO configuration
 */
export const getSEO = () => getConfig('seo', {});

/**
 * Generate mailto link
 * @param {string} subject - Optional email subject
 * @param {string} body - Optional email body
 * @returns {string} Mailto URL
 */
export const getMailtoLink = (subject = '', body = '') => {
  const email = getContactEmail();
  const params = [];

  if (subject) params.push(`subject=${encodeURIComponent(subject)}`);
  if (body) params.push(`body=${encodeURIComponent(body)}`);

  const queryString = params.length > 0 ? `?${params.join('&')}` : '';
  return `mailto:${email}${queryString}`;
};

/**
 * Generate tel link
 * @returns {string} Tel URL
 */
export const getTelLink = () => {
  const phone = getContactPhone();
  return `tel:${phone}`;
};

/**
 * Format phone number for display
 * @returns {string} Formatted phone number
 */
export const getFormattedPhone = () => {
  return getConfig('contact.phoneDisplay', getContactPhone());
};

/**
 * Get CTA button configuration
 * @param {string} type - 'primary' or 'secondary'
 * @returns {object} CTA configuration
 */
export const getCTA = (type = 'primary') => {
  return getConfig(`cta.${type}`, { text: 'Learn More', href: '#' });
};

/**
 * Get section configuration
 * @param {string} sectionName - Section name (hero, benefits, features, etc.)
 * @returns {object} Section configuration
 */
export const getSectionConfig = (sectionName) => {
  return getConfig(sectionName, {});
};

/**
 * Validate email address
 * @param {string} email - Email to validate
 * @returns {boolean} Whether email is valid
 */
export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Validate URL
 * @param {string} url - URL to validate
 * @returns {boolean} Whether URL is valid
 */
export const isValidURL = (url) => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

/**
 * Get all social media links that are configured (not '#')
 * @returns {Array} Array of configured social links with platform name
 */
export const getConfiguredSocialLinks = () => {
  const social = getConfig('social', {});
  return Object.entries(social)
    .filter(([, url]) => url !== '#' && url !== '')
    .map(([platform, url]) => ({ platform, url }));
};

/**
 * Get analytics IDs
 * @returns {object} Analytics configuration
 */
export const getAnalytics = () => getConfig('analytics', {});

/**
 * Get business hours
 * @param {string} day - Day of week (optional)
 * @returns {string|object} Business hours for day or all days
 */
export const getBusinessHours = (day = null) => {
  if (day) {
    return getConfig(`businessHours.schedule.${day.toLowerCase()}`, 'Closed');
  }
  return getConfig('businessHours', {});
};

/**
 * Check if currently in business hours
 * @returns {boolean} Whether currently in business hours
 */
export const isBusinessHours = () => {
  const now = new Date();
  const day = now.toLocaleDateString('en-US', { weekday: 'long' }).toLowerCase();
  const hours = getBusinessHours(day);

  if (hours === 'Closed') return false;

  // This is a simple check - you might want to add more sophisticated time checking
  const currentHour = now.getHours();
  return currentHour >= 9 && currentHour < 18; // Assuming 9 AM - 6 PM
};

/**
 * Get current year for copyright
 * @returns {number} Current year
 */
export const getCurrentYear = () => new Date().getFullYear();

/**
 * Generate page title
 * @param {string} pageTitle - Optional page-specific title
 * @returns {string} Full page title
 */
export const getPageTitle = (pageTitle = '') => {
  const brandName = getBrandName();
  return pageTitle ? `${pageTitle} | ${brandName}` : getSEO().title;
};

/**
 * Get logo URL
 * @param {string} type - 'primary' or 'favicon'
 * @returns {string} Logo URL
 */
export const getLogo = (type = 'primary') => {
  return getConfig(`brand.logo.${type}`, null);
};

export default {
  getConfig,
  getBrandName,
  getContactEmail,
  getContactPhone,
  getSocialLink,
  isFeatureEnabled,
  getThemeColor,
  getNavigation,
  getTeamMembers,
  getFooterLinks,
  getSEO,
  getMailtoLink,
  getTelLink,
  getFormattedPhone,
  getCTA,
  getSectionConfig,
  isValidEmail,
  isValidURL,
  getConfiguredSocialLinks,
  getAnalytics,
  getBusinessHours,
  isBusinessHours,
  getCurrentYear,
  getPageTitle,
  getLogo,
};
