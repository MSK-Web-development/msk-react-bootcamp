var path = require('path');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'main.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ]
  },
  devServer: {
    port: '3000',
    contentBase: ['./public'],
    historyApiFallback: true
  },
  plugins: [
    new OpenBrowserPlugin({ url: 'http://localhost:3000' })
  ]
}