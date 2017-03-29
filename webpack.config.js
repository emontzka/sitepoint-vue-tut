var path = require('path');

module.exports = {
	entry: './src/main',
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'main.js'
	},
	module: {
		loaders: [
			{
				test: /\.vue$/,
				loader: 'vue',
			},
			{
				test: /\.js$/,
				loader: 'babel',
				exclude: /node_modules/,
			}
		]
	},
	vue: {
		loaders: {
			js: 'babel'
		}
	}
}