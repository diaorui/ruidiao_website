import { useEffect } from 'react';
import { siteConfig } from '../config';

/**
 * GoogleAnalytics Component
 *
 * Dynamically loads and initializes Google Analytics gtag.js
 * This component should be included once in your app, typically in the root component.
 *
 * Features:
 * - Only loads when enabled in config
 * - Prevents duplicate script loading
 * - Handles gtag initialization properly
 * - Type-safe with proper TypeScript declarations
 */

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

export const GoogleAnalytics = () => {
  useEffect(() => {
    const { measurementId, enabled } = siteConfig.googleAnalytics;

    // Exit early if analytics is disabled
    if (!enabled || !measurementId) {
      return;
    }

    // Check if script is already loaded
    const existingScript = document.querySelector(
      `script[src*="googletagmanager.com/gtag/js"]`
    );

    if (existingScript) {
      return;
    }

    // Initialize dataLayer
    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag() {
      window.dataLayer.push(arguments);
    };
    window.gtag('js', new Date());
    window.gtag('config', measurementId);

    // Load gtag.js script
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    document.head.appendChild(script);

    // Cleanup function
    return () => {
      // Note: We don't remove the script on cleanup as GA should persist
      // across the entire session
    };
  }, []);

  // This component doesn't render anything
  return null;
};
