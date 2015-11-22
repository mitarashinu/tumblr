var webpack = require('webpack');

module.exports = {
  context: __dirname + '/js',
  entry: './entry.js',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      courseMap: false
    })
  ],
  devServer: {
    contentBase: './js'
  }
}
