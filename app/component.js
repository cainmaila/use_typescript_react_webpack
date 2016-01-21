"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var Link = require('react-router').Link;
var Hello = (function (_super) {
    __extends(Hello, _super);
    function Hello() {
        _super.apply(this, arguments);
    }
    Hello.prototype.render = function () {
        return React.createElement("h1", null, React.createElement(Link, {to: "/about"}, "AAAA Hello world Cain !!"), this.props.children);
    };
    return Hello;
})(React.Component);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Hello;
