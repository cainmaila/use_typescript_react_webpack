"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var Link = require('react-router').Link;
var CainUi = (function (_super) {
    __extends(CainUi, _super);
    function CainUi(props) {
        _super.call(this, props);
    }
    CainUi.prototype.render = function () {
        return React.createElement("div", {className: "cainui"}, React.createElement(Link, {to: "/"}, "XXXXXXX"), React.createElement("p", null, "Cain UI !!"));
    };
    return CainUi;
})(React.Component);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = CainUi;
