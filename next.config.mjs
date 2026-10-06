/** @type {import('next').NextConfig} */
const legacyRedirects = [
  ["/mentions-legales726363", "/mentions-legales"],
  ["/auditmarketing", "/audit"],
  ["/contact", "/"],
  ["/gohighlevel", "/guide/gohighlevel-france"],
  ["/microsoft", "/services"],
  ["/module", "/guide/espace-membres-gohighlevel"],
  ["/siteweb", "/services"],
].flatMap(([source, destination]) => [
  { source, destination, statusCode: 301 },
  { source: `${source}/`, destination, statusCode: 301 },
]);

const nextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.promarket.fr" }],
        destination: "https://promarket.fr/:path*",
        statusCode: 301,
      },
      ...legacyRedirects,
    ];
  },
};

export default nextConfig;
