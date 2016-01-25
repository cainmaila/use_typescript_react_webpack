"use strict";
var objectAssign = require('object-assign');
var routeReducer = require('redux-simple-router').routeReducer;
function myReducer(state, acc) {
    console.log(acc);
    if (acc.type === "ADD") {
        state = objectAssign({}, state, { initialCount: state.initialCount * 1 + acc.payload * 1 }, { routing: routeReducer });
    }
    return state;
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = myReducer;
