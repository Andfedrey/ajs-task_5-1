const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ], 
  },
  output: {
    path: path.resolve(__dirname, 'dist'), 
    filename: 'app.bundle.js',
  },
};
