const path = require('path')

module.exports = {
  entry: path.resolve(__dirname, '../src/main.js'),
  output: {
    path: path.resolve(__dirname, '../static'),
    filename: 'js/[name].[chunkhash].js'
  },
  module: {
    rules: [
    {
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader'
      ]
    }]
  }
}
