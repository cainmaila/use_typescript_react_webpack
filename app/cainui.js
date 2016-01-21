"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var react_redux_1 = require('react-redux');
var Link = require('react-router').Link;
var routeActions = require('redux-simple-router').routeActions;
var CainUi = (function (_super) {
    __extends(CainUi, _super);
    function CainUi(props) {
        _super.call(this, props);
    }
    CainUi.prototype.render = function () {
        setTimeout(this.funA.bind(this), 1000);
        return React.createElement("div", {className: "cainui"}, React.createElement(Link, {to: "/"}, "XXXXXXX"), React.createElement("p", null, "Cain UI !! ", this.props.initialCount));
    };
    CainUi.prototype.funA = function () {
        this.props.dispatch(routeActions.push("/"));
    };
    return CainUi;
})(React.Component);
function select(state) {
    return state;
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = react_redux_1.connect(select)(CainUi);
