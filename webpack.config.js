const webpack = require('webpack');
const HtmlPackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  plugins: [
    // new webpack.optimize.UglifyJsPlugin(),
    new HtmlPackPlugin({
      title: 'william try',
      hash: true,
      minify: {
      	collapseWhitespace: true,
      },
    })
  ],
  devtool: 'sourcemap',
}
