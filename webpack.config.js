var path = require("path");
var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    main: ["./src/main.tsx"]
  },
  output: {
    filename: "[name].js",
    path: path.join(__dirname, "./dist")
  },
  devtool: "none",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader"
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  stats: {
    all: false,
    colors: true,
    errors: true,
    errorDetails: true,
    performance: true,
    reasons: true,
    timings: true,
    warnings: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "template.ejs"
    })
  ]
};
