const path = require('path');

const merge = require('webpack-merge');

const common = require('./webpack.config');

module.exports = merge(common, {
  entry: path.join(__dirname, 'src/index.js'),
  devServer: {
    host: '127.0.0.1',
    port: 3000,
    contentBase: __dirname,
    publicPath: '/',
  },
});
