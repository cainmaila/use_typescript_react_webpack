"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var my_item_1 = require('./my_item');
var Hello = (function (_super) {
    __extends(Hello, _super);
    function Hello(props) {
        var _this = this;
        _super.call(this, props);
        this.state = {
            count: this.props.initialCount,
        };
        this.tick = function () {
            _this.setState({ count: _this.state.count + 1 });
        };
    }
    Hello.prototype.render = function () {
        return React.createElement("div", null, React.createElement("h1", null, "Hello world Cain !! ", this.state.count), React.createElement("button", {onClick: this.tick.bind(this)}, "XXX"), React.createElement("div", null, this.props.items.map(function (item_var, id) {
            return React.createElement(my_item_1.default, {item_name: item_var});
        })));
    };
    Hello.propTypes = {
        initialCount: React.PropTypes.number.isRequired,
        items: React.PropTypes.array
    };
    Hello.defaultProps = { initialCount: 0, items: [1, 2, 3, 4, 5] };
    return Hello;
})(React.Component);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Hello;
