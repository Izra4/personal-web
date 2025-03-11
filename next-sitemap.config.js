/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://izra.me", // Ganti dengan URL situsmu
  generateRobotsTxt: true, // Otomatis buat robots.txt
  sitemapSize: 5000,
  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/" }],
    additionalSitemaps: ["https://izra.me/sitemap.xml"],
  },
};
