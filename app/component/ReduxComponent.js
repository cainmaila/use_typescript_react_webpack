"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var redux_1 = require('redux');
var react_redux_1 = require('react-redux');
var redux_actions_1 = require('redux-actions');
var ReduxComponent = (function (_super) {
    __extends(ReduxComponent, _super);
    function ReduxComponent(props) {
        var _this = this;
        _super.call(this, props);
        setTimeout(function () {
            _this.props.otherActions(1);
        }, 1000);
    }
    ReduxComponent.prototype.render = function () {
        return React.createElement("h1", null, "ReduxComponent ", this.props.myNum, "!!");
    };
    ReduxComponent.propTypes = {
        myNum: React.PropTypes.number.isRequired,
        items: React.PropTypes.array
    };
    ReduxComponent.defaultProps = { myNum: 0, items: [] };
    return ReduxComponent;
})(React.Component);
var actionCreators = redux_actions_1.createAction("ADD");
function select(state) {
    console.log(state);
    return state;
}
function mapDispatchProps(dispatch) {
    return {
        otherActions: redux_1.bindActionCreators(actionCreators, dispatch)
    };
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = react_redux_1.connect(select, mapDispatchProps)(ReduxComponent);
