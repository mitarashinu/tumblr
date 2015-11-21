var webpack = require('webpack');
module.exports ={
  context: __dirname + '/js',
  entry: './entry',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      sourceMap: false
    })
  ],
  defServer: {
    contentBase: './js'
  }
}
