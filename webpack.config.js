module.exports = {
	entry: './index.js',
	output: {
		filename: './dist/index.js',
		libraryTarget: 'commonjs2'
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
