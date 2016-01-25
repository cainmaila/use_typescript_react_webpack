"use strict";
require("./less/main.less");
var React = require('react');
var ReactDOM = require('react-dom');
var Hello_1 = require('./component/Hello');
var redux_1 = require('redux');
var react_redux_1 = require('react-redux');
var redux_actions_1 = require('redux-actions');
var reducer_tmp_ts_1 = require('./reducer/reducer_tmp.ts');
var initialState = {};
var reducer = redux_actions_1.handleActions({
    'EVET': reducer_tmp_ts_1.default,
}, initialState);
var store = redux_1.createStore(reducer);
ReactDOM.render(React.createElement(react_redux_1.Provider, {store: store}, React.createElement(Hello_1.default, null)), document.getElementById('app'));
