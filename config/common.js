const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {

  entry: {
    app: './app/main.js',
    vendor: './app/vendor.js'
  },

  resolve: {
    alias: {
      vue$: 'vue/dist/vue.esm.js',
      api: path.resolve(__dirname, '../app/api'),
      components: path.resolve(__dirname, '../app/components'),
      store: path.resolve(__dirname, '../app/store'),
      template: path.resolve(__dirname, '../app/template')
    },
    extensions: ['.js', '.json']
  },

  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            css: ExtractTextPlugin.extract({
              use: 'css-loader',
              fallback: 'vue-style-loader'
            })
          }
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest']
    }),

    new HtmlWebpackPlugin({
      template: 'app/template/index.html'
    }),

    new ExtractTextPlugin('[name].[hash].css')
  ]
}
