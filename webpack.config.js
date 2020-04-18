const path = require('path');


module.exports = {
  mode: 'development',
  entry: path.join(__dirname, '/client/index.js'),
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '/public')
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
}