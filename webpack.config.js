// webpack.config.js
const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/template.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "style-loader",
          { loader: "css-loader", options: { importLoaders: 1 } },
          "postcss-loader",
        ],
      },
      {
				test: /\.html$/,
				use: ['html-loader']
			},
    ],
  },

  // Optional for webpack-dev-server
  devServer: {
    watchContentBase: true,
    contentBase: path.resolve(__dirname, "dist"),
    open: true,
  },
}
