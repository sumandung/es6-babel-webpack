var path = require('path');
 var webpack = require('webpack');
 const ExtractTextPlugin = require("extract-text-webpack-plugin");

 module.exports = {
     entry: {
		 bundle : [
			  './src/app.js',
			  './src/events.js'
		 ],
		 style : [
			'./sass/style.scss',
			'./sass/app.scss',
		 ]
	 }, 
     output: {
        path: path.join(__dirname, 'build'),
		filename: '[name].js',
		publicPath: ''
     },
     module: {
         loaders: [
             {
                 test: /\.js$/,
                 loader: 'babel-loader',
                 query: {
                     presets: ['es2015']
                 }
             },
			 {
				test: /\.scss$/,
				exclude: /node_modules/,
				use: ['webpack-extract-css-hot-reload'].concat(ExtractTextPlugin.extract({
				  fallback: 'style-loader',
				  use: [
					'css-loader',
					{
					  loader: 'sass-loader',
					  query: {
						sourceMap: false,
					  },
					},
				  ],
				  publicPath: ''
				})),
			  },
			  {
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
				  fallback: "style-loader",
				  use: "css-loader"
				})
			  }
         ]
     },
     stats: {
         colors: true
     },
	 plugins : [
		 new ExtractTextPlugin({ filename: './styles/style.css', disable: false, allChunks: true }),
	  ],
     devtool: 'source-map',
	 watch: true
 };