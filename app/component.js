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
var Hello = (function (_super) {
    __extends(Hello, _super);
    function Hello(props) {
        var _this = this;
        _super.call(this, props);
        this.state = {
            count: this.props.initialCount,
        };
        this.tick = function () {
            _this.props.dispatch({ type: "ADD", key: 1 });
        };
    }
    Hello.prototype.render = function () {
        return React.createElement("div", null, React.createElement("h1", null, "Hello world Cain !! ", this.props.data.initialCount), React.createElement("button", {onClick: this.tick.bind(this)}, "XXX"), React.createElement("div", null, this.props.data.items.map(function (item_ob, id) {
            return React.createElement(my_item_1.default, {item_name: item_ob.item_name, key: id});
        })));
    };
    Hello.propTypes = {
        initialCount: React.PropTypes.number.isRequired,
        items: React.PropTypes.array
    };
    Hello.defaultProps = { initialCount: 0, items: [] };
    return Hello;
})(React.Component);
function actionCreators(key) {
    return { type: "ADD", key: key };
}
function select(state) {
    return state;
}
function mapDispatchProps(dispatch) {
    return {
        otherActions: redux_1.bindActionCreators(actionCreators, dispatch)
    };
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = react_redux_1.connect(select)(Hello);
