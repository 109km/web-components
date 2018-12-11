const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');


module.exports = {
  entry: './index.js',
  devtool: 'inline-source-map',
  module: {
    rules: [{
        test: /\.html$/,
        use: [{
          loader: 'html-loader',
          options: {
            minimize: true
          },
        }, ],
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              outputPath: 'dist/images/',
              publicPath: 'dist/images/',
            },
          },
        ],
      },
      {
        test: /\.css|\.less$/,
        use: ['css-loader', 'less-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './dist.template.html'),
      filename: './index.html',
    }),
  ],
  output: {
    filename: 'ox.bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/',
  },
};