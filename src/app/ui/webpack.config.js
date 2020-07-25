/* eslint-disable @typescript-eslint/no-var-requires */
const { resolve } = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

// Try the environment variable, otherwise use root.
const ASSET_PATH = process.env.ASSET_PATH || "/";

// Set environment to development.
//const __DEV__ = process.env.NODE_ENV !== "production" || true;

module.exports = {
  entry: "./src/index.tsx",
  // entry: [
  //   // Conditionally include the mock definition file
  //   __DEV__ && "./src/mock/browser.tsx",
  //   // Include your application's entry
  //   "./src/index.tsx",
  // ].filter(Boolean),
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: "./index.html",
      template: "./template.html",
    }),
    new MiniCssExtractPlugin({
      filename: "static/[name].[contenthash].css",
    }),
    new CopyWebpackPlugin(
      [
        { from: "./static/healthcheck.html", to: "static/" },
        { from: "./static/swagger.json", to: "static/" },
      ],
      { copyUnmodified: true }
    ),
  ],
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    alias: {
      "@": resolve(__dirname, "./src"),
      "~": resolve(__dirname),
    },
  },
  output: {
    path: resolve(__dirname, "./dist"),
    filename: "static/[name].[contenthash].js",
    publicPath: ASSET_PATH,
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  // Enable sourcemaps for debugging webpack's output.
  //devtool: "source-map",
  performance: {
    hints: false,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        enforce: "pre",
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader",
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader",
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
  // When importing a module whose path matches one of the following, just
  // assume a corresponding global variable exists and use that instead.
  // This is important because it allows us to avoid bundling all of our
  // dependencies, which allows browsers to cache those libraries between builds.
  // externals: {
  //   react: "React",
  //   "react-dom": "ReactDOM",
  // },
};
