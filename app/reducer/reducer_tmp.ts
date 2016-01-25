const objectAssign = require('object-assign');
// var routeReducer = require('redux-simple-router').routeReducer;
export default function myReducer(state,acc){
    //根據傳入的 acc 處理 state
    objectAssign({},state);
    // objectAssign({},state,{routing: routeReducer});
    return state;
}
