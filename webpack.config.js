module.exports = {
	entry: './index.js',
	output: {
		filename: './dist/index.js'
	},
	target: 'node',
	module: {
		rules: [
			{
				test: /\.js?$/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015']
				}
			}
		]
	}
};
