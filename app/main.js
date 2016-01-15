"use strict";
require("./less/main.less");
var React = require('react');
var ReactDOM = require('react-dom');
var component_1 = require('./component');
var mySignal_1 = require('./mySignal');
var redux_1 = require('redux');
var react_redux_1 = require('react-redux');
var initialState = {
    my_name: "cain",
    mail: 'cainmaila@gmail.com',
    initialCount: 0,
    items: [
        { item_name: 1 },
        { item_name: 3 },
        { item_name: 5 },
        { item_name: 7 },
        { item_name: 9 }
    ]
};
var my_reducer = function (state, acc) {
    if (acc.type === "ADD") {
        state.data.initialCount = state.data.initialCount * 1 + acc.key * 1;
    }
    return { data: state.data };
};
var store = redux_1.createStore(my_reducer, { data: initialState });
ReactDOM.render(React.createElement(react_redux_1.Provider, {store: store}, React.createElement(component_1.default, null)), document.getElementById('app'));
window['$'] = $;
new mySignal_1.default();
mySignal_1.default.sig.add(function (num) { return console.log("Sig output : " + num); });
