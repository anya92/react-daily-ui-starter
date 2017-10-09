const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js')

module.exports = merge(common, {
	devtool: 'inline-source-map',
	module: {
		rules: [
			{
				test: /\.(sass|scss)$/,
				use: ['style-loader', 'css-loader', 'sass-loader']
			}
		]
	},
	devServer: {
		contentBase: './dist',
		hot: true,
		compress: true,
		stats: 'minimal'
	},
	plugins: [
		new webpack.NamedModulesPlugin(),
		new webpack.HotModuleReplacementPlugin()
	]
});
