/* global __dirname, require, module */

const webpack = require('webpack')
const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin
const path = require('path')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const env = require('yargs').argv.env // use --env with webpack 2
let libraryName = 'ol-interaction-LayerSpyglass'

const resolve = (dir) => {
  return path.join(__dirname, '..', dir)
}

let plugins = [
  new webpack.BannerPlugin('This file is created by FDD'),
  new FriendlyErrorsPlugin(),
  new webpack.NoEmitOnErrorsPlugin()
]

let outputFile

if (env === 'build') {
  plugins.push(new UglifyJsPlugin({
    minimize: false
  }))
  outputFile = libraryName + '.min.js'
} else {
  outputFile = libraryName + '.js'
}

const config = {
  entry: [
    path.resolve(__dirname + '/src/index.js')
  ],
  // devtool: '#cheap-module-eval-source-map',
  // devtool: '#eval-source-map',
  devtool: '#source-map',
  output: {
    path: __dirname + '/dist',
    filename: outputFile,
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        enforce: 'pre',  // 在babel-loader对源码进行编译前进行lint的检查
        loaders: [
          'babel-loader',
          'eslint-loader'
        ],
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  resolve: {
    extensions: ['.json', '.js'],
    alias: {
      '@': resolve('src')
    }
  },
  plugins: plugins
}

module.exports = config
