// Webpack build script

const path = require('path'), UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: path.join(__dirname, 'src', 'app.js')
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.min.js'
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react', 'stage-3']
        }
      },
      {
        test: /\.(png|jp(e*)g|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: './assets/[name].[ext]'
            }
          }
        ]
      },
      {
        test: /\.css?$/,
        use: [{
          loader: 'style-loader'
        }, {
          loader: 'css-loader',
          options: {
            minimize: true
          }
        }]
      }
    ]
  },
  optimization: {
    minimizer: [new UglifyJsPlugin()]
  }
};
