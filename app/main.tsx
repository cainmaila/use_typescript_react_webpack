import "./less/main.less";
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Hello from './component';
import CainUi from './cainui';
import * as $ from 'jquery';
import Sig from './mySignal.ts';
var objectAssign = require('object-assign');
import myReducer from './my_reducer.ts';
import * as BB from './myclass2.ts';
import { createAction, handleAction, handleActions } from 'redux-actions';
// import { Router, Route, browserHistory } from 'react-router';
var Route = require('react-router').Route;
var browserHistory = require('react-router').browserHistory;
var Router = require('react-router').Router;
// import { syncHistory, routeReducer } from 'redux-simple-router';
var syncHistory = require('redux-simple-router').syncHistory;
var routeReducer = require('redux-simple-router').routeReducer;
// import { createHistory } from 'history';
// let history = createHistory();
// history.listen(location => {
//   console.log(location.pathname)
// });
// history.push({
//   pathname: '/the/path'
// })
import {
  Store,
  compose,
  createStore,
  bindActionCreators,
  combineReducers,
  applyMiddleware
} from 'redux';
import {
  connect,
  Provider
} from 'react-redux';

const initialState = {
    my_name : "cain",
    mail : 'cainmaila@gmail.com',
    initialCount : 999,
    items:[
        {item_name:1},
        {item_name:3},
        {item_name:5},
        {item_name:7},
        {item_name:9}
    ]
};

const routes = (
    <Route path="/" component={Hello}>
        <Route path="c" component={CainUi}></Route>
        <Route path="a" component={CainUi}></Route>
    </Route>
);

function logger({ getState }) {
  return (next) => (action) => {
    console.log('will dispatch', action);
    // 调用 middleware 链中下一个 middleware 的 dispatch。
    let returnValue = next(action);
    // console.log('state after dispatch', getState());
    // 一般会是 action 本身，除非
    // 后面的 middleware 修改了它。
    return returnValue;
  };
}

let reducer = handleActions({
    'ADD':myReducer
},initialState);

const reduxRouterMiddleware = syncHistory(browserHistory);
const createStoreWithMiddleware = applyMiddleware(logger,reduxRouterMiddleware);
let store = createStoreWithMiddleware(createStore)(reducer);

// reduxRouterMiddleware.listenForReplays(store);

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            {routes}
        </Router>
    </Provider>,
    document.getElementById('app')
);
window['$'] = $;

new Sig();
Sig.sig.add((num:number)=>console.log("Sig output : "+num));
