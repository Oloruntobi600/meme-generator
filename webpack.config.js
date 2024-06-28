const path = require('path');

module.exports = {
  mode: 'production',  // or 'production'
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.pack.js',
  },
  resolve: {
    extensions: ['.js', '.json'],
    alias: {},
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react'
            ],
          },
        },
      },
    ],
  },
  devtool: false, // Disable devtool for production
};
