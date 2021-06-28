const path              = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');
 
module.exports = {
    entry: [path.resolve(__dirname, './index.js')],
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
        ]
    },
    resolve: {
        extensions: ['*', '.js'],
        
    },
    mode: 'development',
    node: {
        global: true
    },
    output: {
        publicPath: '/',
        path: path.resolve(__dirname, './dist'),
        filename: 'index.js',
    },
    plugins: [ 
        new HtmlWebpackPlugin({
            title: 'Nytro Cards',
            template: path.resolve(__dirname, './index.html'),
        }),
        new NodePolyfillPlugin()
    ],
    devServer: {
        // port: 8000,
        contentBase: path.resolve(__dirname, './dist'),
        historyApiFallback: true, 
        
    },
};