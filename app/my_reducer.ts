const objectAssign = require('object-assign');
var routeReducer = require('redux-simple-router').routeReducer;
export default function myReducer(state,acc){
    if (acc.type === "ADD") {
        state = objectAssign({},state,{initialCount:state.initialCount*1+acc.payload*1},{routing: routeReducer})
    }
    // objectAssign(state,{routing: routeReducer}); //加入 route 資料
    return state;
}
