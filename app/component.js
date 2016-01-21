"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var my_item_1 = require('./my_item');
var react_redux_1 = require('react-redux');
var redux_1 = require('redux');
var redux_actions_1 = require('redux-actions');
var Link = require('react-router').Link;
var routeActions = require('redux-simple-router').routeActions;
var Hello = (function (_super) {
    __extends(Hello, _super);
    function Hello(props) {
        var _this = this;
        _super.call(this, props);
        this.state = {
            count: this.props.initialCount,
        };
        this.tick = function (e) {
            e.stopPropagation(e);
            _this.props.pageC("/c");
        };
        this.tickKey = function (key) {
            _this.props.otherActions(key);
        };
    }
    Hello.prototype.render = function () {
        var _this = this;
        return React.createElement("div", null, React.createElement("h1", null, "Hello world Cain !! ", this.props.initialCount), React.createElement(Link, {to: "/c"}, "XXXXXX to C"), React.createElement("button", {onClick: this.tick}, "XXX"), React.createElement("div", null, this.props.items.map(function (item_ob, id) {
            return React.createElement(my_item_1.default, {item_name: item_ob.item_name, keyId: id, key: id, tickKey: _this.tickKey});
        })));
    };
    Hello.propTypes = {
        initialCount: React.PropTypes.number.isRequired,
        items: React.PropTypes.array
    };
    Hello.defaultProps = { initialCount: 0, items: [] };
    return Hello;
})(React.Component);
var actionCreators = redux_actions_1.createAction("ADD");
var changePage = function (page_) {
    return routeActions.push(page_);
};
function select(state) {
    return state;
}
function mapDispatchProps(dispatch) {
    return {
        otherActions: redux_1.bindActionCreators(actionCreators, dispatch),
        pageC: redux_1.bindActionCreators(changePage, dispatch)
    };
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = react_redux_1.connect(select, mapDispatchProps)(Hello);
