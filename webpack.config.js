const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: './src/[name].bundle.js',
    },
    module: {
        rules: [
            {
                exclude: '/node_modules/',
                loader: 'babel-loader',
                test: /\.jsx?$/,
                options: {
                    presets: ['@babel/preset-env', ['@babel/preset-react', {"runtime": "automatic"}]]
                }
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                type: 'javascript/auto',
                test: /\.mjs$/,
                use: []
            },
            {
                loader: 'file-loader',
                test: /\.(gif|svg|jpe?g|png|webp|ico|ttf)$/,
                options: {
                    name: '[path][name].[ext]'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            favicon: './public/favicon.ico',
            filename: './index.html',
            manifest: './template-manifest.json',
            template: './template-index.html'
        }),
        new MiniCssExtractPlugin({
            filename: './src/styles.css'
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true,
        port: 3000
    }
};
