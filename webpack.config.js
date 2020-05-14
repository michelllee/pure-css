const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin')


module.exports = {
    entry: {
        koala: './src/index.js',
        pizza: './src/pizza.js',
        diamond: './src/diamond.js'
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist')
    },
    module: {
        rules: [{
                test: /\.pug/,
                loaders: ['html-loader', 'pug-html-loader']
            },
            {
                test: /\.css$/,
                use: [{
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            // you can specify a publicPath here
                            // by default it uses publicPath in webpackOptions.output
                            publicPath: '../',
                            hmr: process.env.NODE_ENV === 'development'
                        }
                    },
                    'css-loader'
                ]
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    'style-loader',
                    // Translates CSS into CommonJS
                    'css-loader',
                    // Compiles Sass to CSS
                    'sass-loader',
                ],
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            chunks: ['koala'],
            filename: 'index.html'
        }),
        new HtmlWebpackPlugin({
            chunks: ['koala'],
            template: 'src/pug.pug',
            filename: 'pug.html'
        }),
        new HtmlWebpackPlugin({
            chunks: ['pizza'],
            template: 'src/pizza.pug',
            filename: 'pizza.html'
        }),
        new HtmlWebpackPlugin({
            chunks: ['diamond'],
            template: 'src/diamond.pug',
            filename: 'diamond.html'
        }),

        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // all options are optional
            filename: '[name].css',
            chunkFilename: '[id].css',
            ignoreOrder: false // Enable to remove warnings about conflicting order
        })
    ]
};