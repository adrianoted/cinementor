
const withCss = require('@zeit/next-css');
require('dotenv').config();
const webpack = require('webpack');

module.exports = withCss({

  webpack(config) {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty'
    }
    config.module.rules.push({
      test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 100000,
          publicPath: './',
          outputPath: 'static/css/',
          name: '[name].[ext]'
        }
      }
    })

    config.plugins.push(
      new webpack.EnvironmentPlugin(process.env),
    )

    return config
  }
})