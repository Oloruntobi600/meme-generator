const {resolve} = require("path");
module.exports = {
  mode: 'development',
  output: {
    path: resolve(__dirname, 'public'),
    filename: '[name].pack.js'
  },
  resolve: {
    extensions: ['.js', '.json'],
    alias: {}
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  },
  entry: {
    index: './index.js'
  }
};
