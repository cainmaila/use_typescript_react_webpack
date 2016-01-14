"use strict";
var signals = require('signals');
var MySignal = (function () {
    function MySignal() {
        MySignal.sig = new signals.Signal();
    }
    ;
    return MySignal;
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = MySignal;
