"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var ReactDOM = require('react-dom');
var react_redux_1 = require('react-redux');
var redux_1 = require('redux');
var redux_actions_1 = require('redux-actions');
var routeActions = require('redux-simple-router').routeActions;
var RegView = (function (_super) {
    __extends(RegView, _super);
    function RegView(props) {
        var _this = this;
        _super.call(this, props);
        this.bnClick = function (e) {
            e.preventDefault();
            var uid = ReactDOM.findDOMNode(_this.refs["uid"]).value.trim();
            var upwd = ReactDOM.findDOMNode(_this.refs["upwd"]).value.trim();
            var uname = ReactDOM.findDOMNode(_this.refs["uname"]).value.trim();
            var umail = ReactDOM.findDOMNode(_this.refs["umail"]).value.trim();
            _this.props.logininActions({
                uid: uid,
                upwd: upwd,
                uname: uname,
                umail: umail
            });
            ReactDOM.findDOMNode(_this.refs["uid"]).value = "";
            ReactDOM.findDOMNode(_this.refs["upwd"]).value = "";
            ReactDOM.findDOMNode(_this.refs["uname"]).value = "";
            ReactDOM.findDOMNode(_this.refs["umail"]).value = "";
        };
    }
    RegView.prototype.render = function () {
        return React.createElement("div", {id: "regview"}, React.createElement("div", {className: "til"}, "帳號"), React.createElement("input", {type: "text", ref: "uid"}), React.createElement("div", {className: "til"}, "密碼"), React.createElement("input", {type: "password", ref: "upwd"}), React.createElement("div", {className: "til"}, "顯示名"), React.createElement("input", {type: "text", ref: "uname"}), React.createElement("div", {className: "til"}, "E-Mail"), React.createElement("input", {type: "text", ref: "umail"}), React.createElement("div", {className: "til"}, "送出表單"), React.createElement("input", {type: "submit", defaultValue: "送出", onClick: this.bnClick}));
    };
    RegView.propTypes = {};
    return RegView;
})(React.Component);
var logininActionCreators = redux_actions_1.createAction("REG_POST");
function select(state) {
    return state;
}
function mapDispatchProps(dispatch) {
    return {
        logininActions: redux_1.bindActionCreators(logininActionCreators, dispatch)
    };
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = react_redux_1.connect(select, mapDispatchProps)(RegView);
