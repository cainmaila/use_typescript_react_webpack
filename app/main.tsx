import "./less/main.less";
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Hello from './component';
// import * as $ from 'jquery';
import Sig from './mySignal.ts';
var objectAssign = require('object-assign');
import * as AA from './myclass.ts';
import * as BB from './myclass2.ts';

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
    initialCount : 888,
    items:[
        {item_name:1},
        {item_name:3},
        {item_name:5},
        {item_name:7},
        {item_name:9}
    ]
};
let my_reducer = (state,acc)=>{

    if (acc.type === "ADD") {
        state = objectAssign({},state,{initialCount:state.initialCount*1+acc.key*1})
    }
    return state;
}
function logger({ getState }) {
  return (next) => (action) => {
    console.log('will dispatch', action);
    // 调用 middleware 链中下一个 middleware 的 dispatch。
    let returnValue = next(action);
    console.log('state after dispatch', getState());
    // 一般会是 action 本身，除非
    // 后面的 middleware 修改了它。
    return returnValue;
  };
}
function logMe(){
    console.log('logMe!!');
}
function logger2() {
  return (next) => (action) => {
    console.log('will dispatch 2', action);
    let returnValue = next(action);
    return returnValue;
  };
}

let createStoreWithMiddleware = applyMiddleware(logger,logger2)(createStore);
let store = createStoreWithMiddleware(my_reducer, initialState); //applyMiddleware 用法
// const store: Store = createStore(my_reducer,initialState);  //原本用法
// const store2: Store = createStore((data)=>{return data},{item_name:999});
ReactDOM.render(
    <Provider store={store}>
        <Hello />
    </Provider>,
    document.getElementById('app')
);
// ReactDOM.render(
//     <Hello />,
//     document.getElementById('app2')
// );
window['$'] = $;

new Sig();
Sig.sig.add((num:number)=>console.log("Sig output : "+num));
