const objectAssign = require('object-assign');
// var routeReducer = require('redux-simple-router').routeReducer;
export default function myReducer(state, acc) {
    //根據傳入的 ADD事件 處理 state
    state = objectAssign({}, state, { myNum: acc.payload });
    // state = objectAssign({},state,{routing: routeReducer});
    return state;
}
