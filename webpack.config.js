//加载依赖
var webpack = require('webpack');

module.exports = {
  entry: './client/app.js',
  output: {
    path: './public/__build__/',
    filename: 'app.min.js',
    chunkFilename: '[name].chunk.min.js',
    publicPath: './client/__build__/'
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  }
}
