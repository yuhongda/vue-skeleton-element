const webpack = require('webpack')
const path = require('path')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.config.base')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = merge(baseConfig, {
    entry: {
        app: ['./build/dev-client', './demo/app.js'],
        vendor:['vue', 'vue-router']
    },
    output: {
        path: path.resolve(__dirname, '../demo/dist'),
        publicPath: '/',
        filename: path.posix.join('static', `js/[name].js`),
        chunkFilename: path.posix.join('static', `js/[name].chunk.js`)
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: path.posix.join('static', `js/vendors.min.js`),
            minify: {
                removeComments: true,
                collapseWhitespace: false
            }
        }),
        new HtmlWebpackPlugin({
            filename:'index.html',
            template:'./demo/template.html',
            inject: 'true'
        }),
        new CopyWebpackPlugin([
            { from: './demo/lib/**', to: path.posix.join('static', `js/[name].[ext]`) }
        ], {})
    ]
});
