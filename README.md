# Rui Diao's Personal Website

This is the source code for my personal website, built to share my journey as an indie creator after a decade at Google. The website showcases my writings, projects, and thoughts on technology and life.

## About Me

After a decade as a Senior Staff Software Engineer at Google, I'm now an indie creator focused on building a life centered around freedom, curiosity, and craft. This website is a living document of that journey.

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

*   **X:** [https://x.com/ruidiaox](https://x.com/ruidiaox)
*   **LinkedIn:** [https://linkedin.com/in/ruidiao](https://linkedin.com/in/ruidiao)
*   **Substack:** [https://ruidiao.substack.com](https://ruidiao.substack.com)

## Acknowledgements

This website was initially created with the help of Gemini, and I've since updated it.

## Contributing

This is a personal project, so I'm not currently accepting contributions. However, feel free to fork the repository and use it as inspiration for your own site.
