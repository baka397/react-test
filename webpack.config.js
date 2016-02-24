//加载依赖
var webpack = require('webpack');

module.exports = {
  entry: './client/app.js',
  output: {
    path: './public/javascripts/__build__/',
    filename: 'app.min.js',
    chunkFilename: '[name].chunk.min.js',
    publicPath: './public/javascripts/__build__/'
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
  },
  externals:{
      'react': 'React',
      'react-dom':'ReactDOM',
      'current-user':'currentUser'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': '"development"' //开发环境设置为development,运营环境设置为production
      }
    })
  ]
}
