"use strict";
require("./less/main.less");
var React = require('react');
var ReactDOM = require('react-dom');
var component_1 = require('./component');
var cainui_1 = require('./cainui');
var $ = require('jquery');
var mySignal_ts_1 = require('./mySignal.ts');
var objectAssign = require('object-assign');
var my_reducer_ts_1 = require('./my_reducer.ts');
var redux_actions_1 = require('redux-actions');
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;
var browserHistory = require('react-router').browserHistory;
var Router = require('react-router').Router;
var syncHistory = require('redux-simple-router').syncHistory;
var routeReducer = require('redux-simple-router').routeReducer;
var redux_1 = require('redux');
var react_redux_1 = require('react-redux');
var initialState = {
    dev: "loginDemo"
};
var routes = (React.createElement(Route, {path: "/"}, React.createElement(IndexRoute, {component: component_1.default}), React.createElement(Route, {path: "c", component: cainui_1.default}), React.createElement(Route, {path: "a", component: cainui_1.default})));
function logger(_a) {
    var getState = _a.getState;
    return function (next) { return function (action) {
        console.log('will dispatch', action);
        var returnValue = next(action);
        return returnValue;
    }; };
}
var reducer = redux_actions_1.handleActions({
    'ADD': my_reducer_ts_1.default
}, initialState);
var reduxRouterMiddleware = syncHistory(browserHistory);
var createStoreWithMiddleware = redux_1.applyMiddleware(logger, reduxRouterMiddleware);
var store = createStoreWithMiddleware(redux_1.createStore)(reducer);
ReactDOM.render(React.createElement(react_redux_1.Provider, {store: store}, React.createElement(Router, {history: browserHistory}, routes)), document.getElementById('app'));
window['$'] = $;
new mySignal_ts_1.default();
mySignal_ts_1.default.sig.add(function (num) { return console.log("Sig output : " + num); });
