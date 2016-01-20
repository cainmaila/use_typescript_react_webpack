const objectAssign = require('object-assign');

export default function myReducer(state,acc){
    if (acc.type === "ADD") {
        state = objectAssign({},state,{initialCount:state.initialCount*1+acc.payload*1})
    }
    console.log(acc);
    return state;
}
