const path = require("path");
const webpack = require("webpack");
module.exports = {
  entry: {
    app: "./js/main.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    clean: true,
    filename: "js/main,js",
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("production"),
    }),
  ],
};
