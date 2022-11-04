const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: ['./client/index.js'],
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  // devtool: 'eval-source-map',
  // mode: 'development',
  devServer: {
    host: 'localhost',
    port: 8080,
    //    * proxy is required in order to make api calls to
    //    * express server while using hot-reload webpack server
    //    * routes api fetch requests from localhost:8080/api/* (webpack dev server)
    //    * to localhost:3000/api/* (where our Express server is running)
    //    */
    proxy: {
      '/api/**': {
        target: 'http://localhost:1313/',
        secure: false,
      },
      '/assets/**': {
        target: 'http://localhost:3000/',
        secure: false,
      },
    },
  },
  module: {
    rules: [
      {
        test: /.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './client/index.html',
    }),
  ],
};
