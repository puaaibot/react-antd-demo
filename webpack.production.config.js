let webpack = require('webpack')
let HtmlWebpackPlugin = require('html-webpack-plugin')
let ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry:  `${__dirname}/app/main.js`,
  output: {
    path: `${__dirname}/build`,
    publicPath: '/',
    filename: '[name]-[hash].js'
  },

  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: "json"
      },
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style', 'css?modules!postcss')
      }
    ]
  },

  postcss: [
    require('autoprefixer')
  ],

  plugins: [
    new webpack.BannerPlugin('Copyright © Kyle'),
    new HtmlWebpackPlugin({template: `${__dirname}/app/index.tmpl.html`}),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new ExtractTextPlugin('[name]-[hash].css')
  ]
}
