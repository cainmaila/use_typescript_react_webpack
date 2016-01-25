var path = require('path');
var node_modules = path.resolve(__dirname, 'node_modules');
var pathToReact = path.resolve(node_modules, 'react/dist/react.min.js');
var pathToReactDom = path.resolve(node_modules, 'react-dom/dist/react-dom.min.js');
var pathToRedux = path.resolve(node_modules, 'redux/dist/redux.min.js');
var pathToReactRedux = path.resolve(node_modules, 'react-redux/dist/react-redux.min.js');

module.exports = {
    entry: ['webpack/hot/dev-server', path.resolve(__dirname, 'app/main.tsx')],
    resolve: {
        alias: {
            'react': pathToReact,
            'react-dom':pathToReactDom,
            'redux' : pathToRedux,
            'react-redux' : pathToReactRedux
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
            exclude: /node_modules|bower_components/,
            query: {
                presets: ['es2015', "react"]
            },
            noParse: [pathToReact,pathToReactDom, pathToRedux, pathToReactRedux, node_modules]
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
    }
};
