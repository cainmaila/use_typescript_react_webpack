"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = function (state, acc) {
    var objectAssign = require('object-assign');
    if (acc.type === "ADD") {
        state = objectAssign({}, state, { initialCount: state.initialCount * 1 + acc.key * 1 });
    }
    return state;
};
