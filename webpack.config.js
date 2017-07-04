// webpack.config.js

var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'build');
var SRC_DIR = path.resolve(__dirname, 'src');

var config = {
  entry: SRC_DIR + '/app/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : SRC_DIR,
        loader : 'babel-loader'
      },
			{
				 test: /\.css$/,
				 use: [
					 'style-loader',
					 'css-loader'
				 ]
			}
    ]
  }
};

module.exports = config;
