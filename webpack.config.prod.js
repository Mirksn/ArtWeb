const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = merge(common, {
  mode: "production",
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
    new CopyPlugin({
      patterns: [
        // HTML pages
        { from: "about.html", to: "about.html" },
        { from: "admin.html", to: "admin.html" },
        { from: "cart.html", to: "cart.html" },
        { from: "landscapes.html", to: "landscapes.html" },
        { from: "portraits.html", to: "portraits.html" },

        // CSS and JS
        { from: "css", to: "css" },
        { from: "js", to: "js" },

        // Images
        { from: "src/img", to: "img" },

        // Other assets
        { from: "icon.svg", to: "icon.svg" },
        { from: "favicon.ico", to: "favicon.ico" },
        { from: "robots.txt", to: "robots.txt" },
        { from: "icon.png", to: "icon.png" },
        { from: "404.html", to: "404.html" },
        { from: "site.webmanifest", to: "site.webmanifest" },
      ],
    }),
  ],
});
