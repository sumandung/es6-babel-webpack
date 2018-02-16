var path = require('path');
 var webpack = require('webpack');

 module.exports = {
     entry: './src/app.js', // [ can be array]
     output: {
         path: path.resolve(__dirname, 'build'),
         filename: 'app.js'
     },
     module: {
         loaders: [
             {
                 test: /\.js$/,
                 loader: 'babel-loader',
                 query: {
                     presets: ['es2015']
                 }
             }
         ]
     },
     stats: {
         colors: true
     },
     devtool: 'source-map',
	 watch: true
 };