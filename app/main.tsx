import "./less/main.less";
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Hello from './component';
// import * as $ from 'jquery';
import Sig from './mySignal.ts';
// import * as objectAssign from 'object-assign';
var objectAssign = require('object-assign');
import * as AA from './myclass.ts';
import * as BB from './myclass2.ts';

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

    // if(acc.type == "INIT"){
    //     return initialState;
    // }else
    // var bb;
    if (acc.type === "ADD") {
        state = objectAssign({},state,{initialCount:state.initialCount*1+acc.key*1})
    }

    // alert(JSON.stringify(state));
    return state;
}
const store: Store = createStore(my_reducer,initialState);
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
// alert(AA.A1.play);
// alert(BB.B1.play);
// A1.play();
// var aa = new A1();
// aa.play();
