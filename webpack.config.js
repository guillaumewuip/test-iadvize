const path = require('path');

module.exports = {
  entry: './src/index.jsx',
  output: {
    path:       path.resolve(__dirname, 'build'),
    publicPath: 'build',
    filename:   'app.bundle.js',
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                'es2017',
                'stage-2',
                'react'
              ],
            },
        }
        ],
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ],
      }
    ],
  },
  resolve: {
    modules: [
      path.resolve(__dirname, './src'),
      path.resolve(__dirname, './node_modules'),
    ],
    extensions: ['.js', '.jsx', '.json', '.css'],
  },
  devtool: 'source-map',
  devServer: {
    compress:         true,
    port:             9000,
    contentBase:      path.join(__dirname),
    compress:         true,
    watchContentBase: true,
  },
};
