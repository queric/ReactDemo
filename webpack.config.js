/**
 * Created by Queric on 17/4/19.
 */
var path = require('path');
var webpack = require('webpack');
//定义了一些文件夹的路径
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'app');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');

module.exports = {
    //项目的文件夹 可以直接用文件夹名称 默认会找index.js 也可以确定是哪个文件名字
    entry: APP_PATH+"/index.js",
    //输出的文件名 合并以后的js会命名为bundle.js
    output: {
        path: BUILD_PATH,
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/, exclude: /node_modules/, use: "babel-loader"
            },
            {
                test: /\.css$/, use: ['style-loader','css-loader']
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()//热模块替换插件
    ],
    devServer: {
        contentBase:"./build",
        historyApiFallback: true,
        inline: true,
        hot:true,
        port:8888
    }
};