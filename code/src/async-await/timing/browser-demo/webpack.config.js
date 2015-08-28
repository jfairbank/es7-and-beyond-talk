var path = require('path');

module.exports = {
  entry: './main',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader?stage=0&optional=runtime' }
    ]
  }
};
