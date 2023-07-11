const path = require('path');

module.exports = {
	mode: 'development',
	entry: {
		app: './index.js'
	},
	output: {
		globalObject: 'self',
		filename: 'boxedmonaco.js',
		path: path.resolve(__dirname, 'dist')
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			},
			{
				test: /\.ttf$/,
				use: ['file-loader']
			}
		]
	}
};
