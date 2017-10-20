const webpack = require('webpack');
const path = require('path');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');


let config = {
  entry: './src/js/index.js',
  output: {
    path: path.resolve(__dirname, './public'),
    filename: 'output.js'
  },
  resolve: { // These options change how modules are resolved
    extensions: ['.scss', '.css'], // Automatically resolve certain extensions
  },
  module: {
    rules: [
      {
        test: /\.scss$/, // files ending with .scss
        use: ['css-hot-loader'].concat(ExtractTextWebpackPlugin.extract({

          fallback: 'style-loader',
          use: ['css-loader', 'postcss-loader', 'sass-loader'],

        })),
      },
    ]
  },
  plugins: [
    new ExtractTextWebpackPlugin('styles.css'),
  ],
  devServer: {
    contentBase: path.resolve(__dirname, './public'),
    historyApiFallback: true,
    inline: true,
    open: true,
  },
  devtool: 'eval-source-map'
};

module.exports = config;
