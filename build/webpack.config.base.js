
var webpack = require('webpack'),
    path = require('path'),
    ExtractTextPlugin = require('extract-text-webpack-plugin');

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
    resolve:{
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.vue', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use:[
                    {
                        loader: 'vue-loader'
                    }
                ]
            },
            {
                test: /\.js$/,
                exclude: file => (
                    /node_modules/.test(file) &&
                    !/\.vue\.js/.test(file)
                ),
                use:[
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['es2015', 'stage-2']
                        }
                    }
                ],
                
            },
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                enforce: 'pre',
                use: [
                    {
                        loader: 'tslint-loader',
                        options: { }
                    }
                ]
            },
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                loader: 'awesome-typescript-loader'
            },
            {
                test: /\.s[c|a]ss$/,
                exclude: /node_modules/,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader"
                },{ 
                    loader: "postcss-loader"
                }, {
                    loader: "vue-style-loader"
                }]
            },
            {
                test: /\.(jpeg|jpg|png|gif)$/i,
                use: [
                    'url-loader?limit=10000&name=images/[name].[ext]?[hash]',
                    {
                        loader: 'img-loader',
                        options: {
                            enabled: false,//process.env.NODE_ENV === 'production',
                            gifsicle: {
                                interlaced: false
                            },
                            mozjpeg: {
                                progressive: true,
                                arithmetic: false
                            },
                            optipng: false, // disabled
                            pngquant: {
                                floyd: 0.5,
                                speed: 2
                            },
                            svgo: {
                                plugins: [
                                    { removeTitle: true },
                                    { convertPathData: false }
                                ]
                            }
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [{
                      loader: 'css-loader',
                      options: {
                        minimize: (isProd),
                        sourceMap: !isProd
                      }
                    }, 'postcss-loader', {
                      loader: 'sass-loader'
                    }]
                  })
            },
            {
                test: /\.styl$/,
                loader: ExtractTextPlugin.extract('css-loader!stylus-loader')        
            },
            {
                test: /\.json$/,
                use: ['json-loader']
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                use: [{
                    loader: 'url-loader',
                    query: { limit: 20000 }
                }]
            }
        ]
    }
}


module.exports.plugins = [
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin("styles.css")
];
