const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
    entry: {
        'main': './src/main.js'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        // publicPath: '/dist/',
        filename: 'js/[name].js'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
                        // the "scss" and "sass" values for the lang attribute to the right configs here.
                        // other preprocessors should work out of the box, no loader config like this nessessary.
                        'scss': ExtractTextPlugin.extract({
                            loader: 'css-loader!sass-loader',
                            fallbackLoader: 'vue-style-loader'
                        }),
                        'sass': ExtractTextPlugin.extract({
                            loader: 'css-loader!sass-loader?indentedSyntax',
                            fallbackLoader: 'vue-style-loader'
                        }),
                        'stylus': ExtractTextPlugin.extract({
                            loader: 'css-loader!stylus-loader',
                            fallbackLoader: 'vue-style-loader'
                        }),
                        'css': ExtractTextPlugin.extract({
                            loader: 'css-loader',
                            fallbackLoader: 'vue-style-loader'
                        })
                    }
                    // other vue-loader options go here
                }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '/image/[name].[ext]?[hash]'
                }
            },
            {
                test: /\.(eot|woff2?|ttf)$/,
                loader: 'file-loader',
                options: {
                    name: '/font/[name].[ext]'
                }
            },
            {
                test: /\.json$/,
                loader: 'json-loader',
                options: {
                    name: '/[name].[ext]?[hash]'
                }
            }
        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.common.js'
        }
    },
    devServer: {
        historyApiFallback: true,
        noInfo: true,
        contentBase: './dist'
    },
    performance: {
        hints: false
    },
    devtool: '#eval-source-map',
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        }),
        new webpack.optimize.CommonsChunkPlugin({filename: 'js/common.js', name: 'common'}),
        new ExtractTextPlugin('css/common.css'),
        new HtmlWebpackPlugin({
            title: 'Funds view',
            filename: 'index.html',
            template: './index.html',
            inject: true,
            hash: true
        }),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new CopyWebpackPlugin([
            {from: './server.js'},
            {from: './process.json'},
            {from: './application.json'}
        ]), new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"' + process.env.NODE_ENV + '"',
            }
        })
    ]
}

if (process.env.NODE_ENV === 'prod') {
    module.exports.devtool = '#source-map'
    // http://vue-loader.vuejs.org/en/workflow/production.html
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.LoaderOptionsPlugin({
            minimize: true
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            compress: {
                warnings: false
            }
        })
    ])
}
