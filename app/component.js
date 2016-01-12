"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var Hello = (function (_super) {
    __extends(Hello, _super);
    function Hello(props) {
        _super.call(this, props);
        this.state = { count: 1 };
    }
    Hello.prototype.tick = function () {
        this.setState({ count: this.state.count + 1 });
    };
    Hello.prototype.render = function () {
        return React.createElement("div", null, React.createElement("h1", null, "Hello world Cain !! ", this.state.count), React.createElement("button", {onClick: this.tick.bind(this)}, "XXX"));
    };
    return Hello;
})(React.Component);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Hello;
