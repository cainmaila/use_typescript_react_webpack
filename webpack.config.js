var path = require('path');
var webpack = require('webpack');
var node_modules = path.resolve(__dirname, 'node_modules');
var pathToReact = path.resolve(node_modules, 'react/dist/react.min.js');
var pathToReactDom = path.resolve(node_modules, 'react-dom/dist/react-dom.min.js');
var pathToJquery = path.resolve(__dirname, 'bower_components/jquery/dist/jquery.min.js');
// var pathToReact_redux = path.resolve(node_modules,'react-redux/dist/react-redux.min.js');
module.exports = {
    entry: ['webpack/hot/dev-server', path.resolve(__dirname, 'app/main.tsx')],
    resolve: {
        alias: {
            'react': pathToReact,
            'react-dom':pathToReactDom,
            'jquery':pathToJquery,
            // 'react-redux':pathToReact_redux
        }
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'build.js',
    },
    module: {
        loaders: [{
            test: /\.(js|jsx)$/,
            loader: 'babel',
            exclude: /node_modules/,
            query: {
                presets: ['es2015', "react"]
            },
            noParse: [pathToReact,pathToReactDom,pathToJquery, node_modules]
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
        new webpack.ProvidePlugin({
            $: "jquery",
        })
    ]
};
