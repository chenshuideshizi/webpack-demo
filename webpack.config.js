const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/js/main.js',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './dist/js')
  },
  module:  {
    rules: [
      {
        test: /\.css$/,
        use: [ MiniCssExtractPlugin.loader,'css-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: '../index.html',
      inject: true
    }),
    new MiniCssExtractPlugin({
      filename: '../style/[name].css'
    })
  ],
  devServer: {
  }
}