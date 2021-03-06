'use strict'

const baseConfig = require('./webpack.conf.base')

const merge = require('webpack-merge')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

const path = require('path')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = merge(baseConfig, {
  // mode: 'production',

  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true
      }),
      new OptimizeCSSAssetsPlugin({})
    ],
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all'
        }
      }
    }
  },
  output: {
    path: path.resolve(__dirname, '../docs')
  },

  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      }
    ]
  },

  plugins: [
    new CopyWebpackPlugin([{
      from: resolve('static'),
      to: resolve('docs/static'),
      toType: 'dir'
    }]),
    new MiniCssExtractPlugin({
      filename: 'assets/main.css'
    })
  ]
})
