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
function logger(_a) {
    var getState = _a.getState;
    return function (next) { return function (action) {
        console.log('will dispatch', action);
        var returnValue = next(action);
        console.log('state after dispatch', getState());
        return returnValue;
    }; };
}
function logMe() {
    console.log('logMe!!');
}
function logger2() {
    return function (next) { return function (action) {
        console.log('will dispatch 2', action);
        var returnValue = next(action);
        return returnValue;
    }; };
}
var createStoreWithMiddleware = redux_1.applyMiddleware(logger, logger2)(redux_1.createStore);
var store = createStoreWithMiddleware(my_reducer, initialState);
ReactDOM.render(React.createElement(react_redux_1.Provider, {store: store}, React.createElement(component_1.default, null)), document.getElementById('app'));
window['$'] = $;
new mySignal_ts_1.default();
mySignal_ts_1.default.sig.add(function (num) { return console.log("Sig output : " + num); });
