let webpack = require('webpack')
let HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  devtool: 'eval-source-map',

  entry:  `${__dirname}/app/main.js`,
  output: {
    path: `${__dirname}/build`,
    publicPath: '/',
    filename: 'bundle.js'
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
        loader: 'style!css?modules!postcss'
      }
    ]
  },

  postcss: [
    require('autoprefixer')
  ],

  plugins: [
    new HtmlWebpackPlugin({template: `${__dirname}/app/index.tmpl.html`}),
    new webpack.HotModuleReplacementPlugin()
  ],

  devServer: {
    port: 8080,
    colors: true,
    historyApiFallback: true,
    inline: true,
    hot: true
  } 
}
