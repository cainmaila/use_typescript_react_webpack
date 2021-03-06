var path = require('path');
var webpack = require('webpack');
var node_modules_dir = path.resolve(__dirname, 'node_modules');
var config = {
    entry: {
        app: path.resolve(__dirname, 'app/main.tsx'),
        // mobile: path.resolve(__dirname, 'app/mobile.js'),
        vendors: ['react','react-dom'],
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        loaders: [{
            test: /\.(js|jsx)$/,
            loader: 'babel',
            exclude: /node_modules/,
            query: {
                presets: ['es2015', "react"]
            }
        }, {
            test: /\.less$/,
            loader: 'style!css!less'
        }, {
            test: /\.(png|jpg)$/,
            loader: 'url?limit=25000'
        }, {
            test: /\.ts(x?)$/,
            loader: 'babel-loader!ts-loader',
        }]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendors',
            filename: "vendors.js"
        })
    ]
};

module.exports = config;
