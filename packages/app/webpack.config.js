const path = require("path");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = {
  entry: "./lib/app.js",
  mode: "development",
  output: {
    filename: "app-bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  // plugins: [new BundleAnalyzerPlugin()],
};
