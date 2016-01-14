import "./less/main.less";
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Hello from './component';
// import * as $ from 'jquery';
import {
  Store,
  compose,
  createStore,
  bindActionCreators,
  combineReducers
} from 'redux';
import {
  connect,
  Provider
} from 'react-redux';

const initialState = {item_name:0};
const store: Store = createStore((data)=>{return data},initialState);
const store2: Store = createStore((data)=>{return data},{item_name:999});
ReactDOM.render(
    <Provider store={store}>
        <Hello />
    </Provider>,
    document.getElementById('app')
);
ReactDOM.render(
    <Provider store={store2}>
        <Hello />
    </Provider>,
    document.getElementById('app2')
);
window['$'] = $;
