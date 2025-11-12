/**
 * Site Configuration
 * Centralized configuration for analytics and other site-wide settings
 */

export const siteConfig = {
  /**
   * Google Analytics Measurement ID
   * This ID is safe to be public as it's designed for client-side use
   */
  googleAnalytics: {
    measurementId: 'G-JSWZB9W4HY',
    enabled: true, // Set to false to disable analytics
  },
} as const;
