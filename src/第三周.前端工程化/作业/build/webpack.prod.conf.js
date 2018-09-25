const path = require('path')

const webpack = require('webpack');
const config = require('./webpack.base.conf');
const merge = require('webpack-merge')

const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const buildConfig = merge(config, {
  mode: 'production',
  plugins: [
    new CleanWebpackPlugin([path.resolve(__dirname, '../dist')]),

    new ExtractTextPlugin({
      filename: path.resolve(__dirname, 'css/[name].[contenthash].css'),
      allChunks: true
    }),

    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, '../index.html'),
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
      },
      chunksSortMode: 'dependency'
    })
  ]
})

module.exports = buildConfig
