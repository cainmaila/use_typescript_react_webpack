"use strict";
var objectAssign = require('object-assign');
function myReducer(state, acc) {
    if (acc.type === "ADD") {
        state = objectAssign({}, state, { initialCount: state.initialCount * 1 + acc.payload * 1 });
    }
    console.log(acc);
    return state;
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = myReducer;
