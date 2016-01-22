"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var react_redux_1 = require('react-redux');
var redux_1 = require('redux');
var redux_actions_1 = require('redux-actions');
var routeActions = require('redux-simple-router').routeActions;
var LoginView = (function (_super) {
    __extends(LoginView, _super);
    function LoginView(props) {
        var _this = this;
        _super.call(this, props);
        this.state = {
            count: this.props.initialCount,
        };
        this.bnClick = function (e) {
            e.stopPropagation(e);
            _this.props.logininActions({ test: "test" });
        };
    }
    LoginView.prototype.render = function () {
        return React.createElement("div", {className: "loginView"}, React.createElement("div", {className: "fm"}, React.createElement("div", {className: "til"}, "帳號"), React.createElement("input", {type: "text", name: "u_id"}), React.createElement("div", {className: "til"}, "密碼"), React.createElement("input", {type: "password", name: "u_password"})), React.createElement("button", {id: "bn", onClick: this.bnClick}, "送出"));
    };
    LoginView.propTypes = {
        initialCount: React.PropTypes.number.isRequired,
        items: React.PropTypes.array
    };
    LoginView.defaultProps = { initialCount: 0, items: [] };
    return LoginView;
})(React.Component);
var logininActionCreators = redux_actions_1.createAction("LOGIN_SENT");
function select(state) {
    return state;
}
function mapDispatchProps(dispatch) {
    return {
        logininActions: redux_1.bindActionCreators(logininActionCreators, dispatch)
    };
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = react_redux_1.connect(select, mapDispatchProps)(LoginView);
