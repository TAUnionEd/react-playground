const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }, {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      }
    ]
  },
  output: {
    filename: '[name].[hash].bundle.js',
    path: path.join(__dirname, './dist'),
    publicPath: '/',
  },
  devServer: {
    contentBase: './dist'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src/index.html'),
      filename: 'index.html',
      path: path.join(__dirname, './dist'),
    }),
  ],
};