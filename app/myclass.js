"use strict";
var A1 = (function () {
    function A1() {
    }
    A1.play = function () {
        console.log("static");
    };
    A1.prototype.play = function () {
        console.log("public");
    };
    return A1;
})();
exports.A1 = A1;
var A2 = (function () {
    function A2() {
    }
    A2.play = function () {
        console.log("static");
    };
    A2.prototype.play = function () {
        console.log("public");
    };
    return A2;
})();
exports.A2 = A2;
