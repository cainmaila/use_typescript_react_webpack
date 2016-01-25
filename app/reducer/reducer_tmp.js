"use strict";
var objectAssign = require('object-assign');
function myReducer(state, acc) {
    objectAssign({}, state);
    return state;
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = myReducer;
