const path = require('path');
const autoprefixer = require('autoprefixer');

module.exports = {
	mode: 'development',
	entry: {
		main: path.resolve(__dirname, './src/js/1.js'),
		index: path.resolve(__dirname, './src/js/2.js')
	},
	output: {
		path: path.resolve(__dirname, './build/'),
		filename: '[name].min.js'
	},
	module: {
		rules: 	[
			// css
			{test : /\.css$/i, use: ['style-loader', 'css-loader', 'postcss-loader']},
			{test: /\.less$/i, use: ['style-loader', 'css-loader', 'less-loader']},
			// 打包文件到 build/docs 目录
			{test : /\.txt$/i, use: [
				{
					loader: 'file-loader',
					options: {
						// 将文件直接转移到 ./build/docs 目录下
						outputPath: 'docs/'
					}	
				}
			]},
			// 图片文件处理，文件大于1k 就直接 copy 到 build/images 目录下，小于1k 的转成 base64
			{test : /\.(jpg|png|gif)$/i, use: [
				{
					loader: 'url-loader',
					options: {
						outputPath: 'images/',
						limit: 1024
					}
				}
			]},
			// es6 编译
			{
				test: /\.jsx?/i,
				exclude: /node_modules/,
				use:[
					{
						loader: 'babel-loader',
						options: {
							presets: ['@babel/preset-env']
						}
					}
				]
			},
			// 代码规范
			{
				test: /./jsx?/i,
				exclude: /node_modules/,
				use: [
					{
						loader: 'eslint-loader',
						options: {
						}
					}
				]
			}
		]
	},
	devtool: 'source-map'
}
