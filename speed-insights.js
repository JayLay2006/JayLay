// Vercel Speed Insights initialization
// This file initializes Speed Insights for the website

import { injectSpeedInsights } from '@vercel/speed-insights';

// Inject Speed Insights with default configuration
injectSpeedInsights({
  debug: false, // Set to true for debugging in development
});
