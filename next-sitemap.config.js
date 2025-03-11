/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://izra.me",
  generateRobotsTxt: true,
  sitemapSize: 5000,
  generateIndexSitemap: false,
  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/" }],
    additionalSitemaps: ["https://izra.me/sitemap.xml"],
  },
};
