/**
 * Test Configuration for the Coronado National Forest Heritage Society site.
 *
 * Single source of truth for content-specific values used in E2E tests.
 */

export const testConfig = {
  /**
   * Copyright Configuration
   * Used in: tests/copyright.spec.ts
   */
  copyright: {
    text: 'Coronado National Forest Heritage Society. All rights reserved.',
    searchText: 'All rights reserved',
    linkUrl: 'https://freeforcharity.org',
    linkText: 'Free For Charity',
  },

  /**
   * Branding Configuration
   * Used in tests/branding.spec.ts (homepage hero + nav).
   */
  branding: {
    siteName: 'Coronado National Forest Heritage Society',
    heroHeading: 'Preserving Heritage',
    tagline: 'Heritage Society',
  },

  /**
   * External links the site must preserve from the WordPress original.
   */
  external: {
    brownCanyonRanch: 'https://browncanyonranch.org',
    kentuckyCamp: 'http://kentuckycamp.org',
    guidestar: 'https://www.guidestar.org/profile/86-0802156',
  },
}
