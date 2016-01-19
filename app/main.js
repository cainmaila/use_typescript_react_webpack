"use strict";
require("./less/main.less");
var React = require('react');
var ReactDOM = require('react-dom');
var component_1 = require('./component');
var mySignal_ts_1 = require('./mySignal.ts');
var objectAssign = require('object-assign');
var redux_1 = require('redux');
var react_redux_1 = require('react-redux');
var initialState = {
    my_name: "cain",
    mail: 'cainmaila@gmail.com',
    initialCount: 888,
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
        state = objectAssign({}, state, { initialCount: state.initialCount * 1 + acc.key * 1 });
    }
    return state;
};
var store = redux_1.createStore(my_reducer, initialState);
ReactDOM.render(React.createElement(react_redux_1.Provider, {store: store}, React.createElement(component_1.default, null)), document.getElementById('app'));
window['$'] = $;
new mySignal_ts_1.default();
mySignal_ts_1.default.sig.add(function (num) { return console.log("Sig output : " + num); });
