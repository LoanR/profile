'use strict'

const baseConfig = require('./webpack.conf.base')

const webpack = require('webpack')
const merge = require('webpack-merge')

module.exports = merge(baseConfig, {
  // mode: 'development',

  devServer: {
    // historyApiFallback: true,
    hot: true,
    watchOptions: {
      poll: true
    },
    stats: {
      all: false,
      version: true,
      timings: true,
      builtAt: true,
      modules: true,
      maxModules: 0,
      errors: true,
      warnings: true,
      moduleTrace: false,
      errorDetails: true
    }
  },

  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader',
          'postcss-loader'
        ]
      },
      {
        test: /\.(js|vue)$/,
        use: 'eslint-loader',
        enforce: 'pre'
      }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
})
