const path = require('path');

export const HOST = '127.0.0.1';
export const PORT = 8080;
export const URL = `http://${HOST}:${PORT}/`;

export default {
  devtool: '#inline-source-map',
  entry: path.resolve(__dirname, 'main'),
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel' },
    ],
  },
};
