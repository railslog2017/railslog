const path = require('path')
const webpack = require('webpack')
const webpackMerge = require('webpack-merge')
const commonConfig = require('./common.js')

module.exports = webpackMerge(commonConfig, {

  devtool: '#source-map',

  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].[chunkhash].js',
    publicPath: '/'
  },

  plugins:[
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ]
})
