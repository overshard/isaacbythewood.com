const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.NODE_ENV !== "development",
});

module.exports = withBundleAnalyzer({});
