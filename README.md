# Rui Diao's Personal Website

This is the source code for my personal website. It records a Ph.D. in mathematical optimization, a decade at Google, and the current chapter as an indie creator. The site showcases research, writings, and projects.

## About Me

I completed a Ph.D. in mathematical optimization at the Chinese Academy of Sciences in 2014, advised by Yu-Hong Dai. After a decade as a Senior Staff Software Engineer at Google, I'm now an indie creator focused on building a life centered around freedom, curiosity, and craft. This website is a living document of that journey.

## Tech Stack

- **Framework:** React 19 with TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **Analytics:** Google Analytics 4

## Deployment

This site is deployed to [ruidiao.dev](https://ruidiao.dev)

## Configuration

### Google Analytics

Google Analytics is configured in `config.ts`. To modify or disable analytics:

```typescript
// config.ts
export const siteConfig = {
  googleAnalytics: {
    measurementId: 'G-JSWZB9W4HY', // Your GA4 Measurement ID
    enabled: true, // Set to false to disable analytics
  },
};
```

The analytics script is automatically loaded by the `GoogleAnalytics` component in `App.tsx`.

## Social Links

*   **X:** [https://x.com/ruidiao](https://x.com/ruidiao)
*   **LinkedIn:** [https://linkedin.com/in/ruidiao](https://linkedin.com/in/ruidiao)
*   **Substack:** [https://ruidiao.substack.com](https://ruidiao.substack.com)
*   **Google Scholar:** [https://scholar.google.com/citations?user=OrSPeVsAAAAJ](https://scholar.google.com/citations?user=OrSPeVsAAAAJ)

## Acknowledgements

This website was developed with the help of Gemini and Claude.

## Contributing

This is a personal project, so I'm not currently accepting contributions. However, feel free to fork the repository and use it as inspiration for your own site.
