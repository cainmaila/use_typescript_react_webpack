import "./less/main.less";
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import ReduxComponent from './component/ReduxComponent';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { createAction, handleAction, handleActions } from 'redux-actions';

import myReducer from './reducer/reducer_tmp.ts';

let initialState = {}; //初始資料

let reducer = handleActions({
    // 'EVET':myReducer,
    'ADD':myReducer,
},initialState);

let store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <ReduxComponent />
    </Provider>,
    document.getElementById('app')
);
