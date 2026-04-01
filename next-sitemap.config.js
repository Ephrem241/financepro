/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://financepro.io',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: 'daily',
  priority: 0.7,

  // Per-path priority override; changefreq is daily for all pages
  transform: async (config, path) => {
    const priorities = { '/': 1.0, '/calculators': 0.9 };
    return {
      loc: path,
      changefreq: 'daily',
      priority: priorities[path] ?? config.priority,
      lastmod: new Date().toISOString(),
    };
  },

  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
  },
};
