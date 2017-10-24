const webpack = require('webpack');
const path = require('path');

var config = {
  // Where to start the compile from
  entry: './src/index.jsx',
  // Where to compile to...
  output: {
    path: path.resolve(__dirname, './built'),
    filename: 'output_bundle.js'
  },
  // File types to handle
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    // How to handle each type of file type as above
    rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: "babel-loader"
        },

        {
          test: /\.jsx$/,
          exclude: /node_modules/,
          loader: "babel-loader"
        },
    ]
  },
};

module.exports = config;
