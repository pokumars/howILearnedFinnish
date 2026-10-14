import createMDX from "@next/mdx";

const withMDX = createMDX({
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

const config = {
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  // Internal tools live as static HTML in public/tools and stay out of search results.
  async rewrites() {
    return [{ source: "/tools/reel-frame", destination: "/tools/reel-frame.html" }];
  },
  async headers() {
    return [
      {
        source: "/tools/:path*",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
    ];
  },
};

export default withMDX(config);
