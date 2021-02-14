const merge = require('webpack-merge')
const path = require('path')
const webpack = require('webpack')
const common = require('./webpack.common.js')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: {
    index: './lib/demo.js'
  },
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: 'demo.js',
    library: 'demo-lib',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.js$/i,
        use: ['babel-loader']
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: ['file-loader']
      }
    ]
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: 'Alexander Ross Lennert',
      template: './demo/index.html'
    })
  ],
  devServer: {
    contentBase: './dist',
    hot: true,
    historyApiFallback: true,
  }
})
