"use strict";
var objectAssign = require('object-assign');
function myReducer(state, acc) {
    state = objectAssign({}, state, { myNum: acc.payload });
    return state;
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = myReducer;
