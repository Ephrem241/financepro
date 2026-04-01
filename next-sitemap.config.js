/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://financepro.io',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  exclude: [],
  additionalPaths: async () => [
    { loc: '/', changefreq: 'monthly', priority: 1.0 },
    { loc: '/calculators', changefreq: 'monthly', priority: 0.9 },
  ],
};
