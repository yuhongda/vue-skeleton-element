const webpack = require('webpack')
const path = require('path')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.config.base')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
 

module.exports = merge(baseConfig, {
    entry: {
        app: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        publicPath: '',
        filename: 'vue-skeleton-element.js',
        library: 'VueSkeletonElement',
        libraryTarget: 'umd'
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify("production")
            }
        }),
        new webpack.LoaderOptionsPlugin({
            test: /\.vue$/,
            options: {
                vue: {
                    loaders: {
                        css: ExtractTextPlugin.extract('css-loader'),
                        stylus: ExtractTextPlugin.extract('css-loader!stylus-loader'),
                        js: 'babel-loader?presets[]=es2015&presets[]=stage-2'
                    },
                    postcss: [
                        require('autoprefixer')({
                            browsers: ['last 2 versions']
                        })
                    ]
                }
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.optimize.OccurrenceOrderPlugin()
    ]
});
