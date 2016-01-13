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
        var _this = this;
        _super.call(this, props);
        this.state = {
            item_name: this.props.item_name,
        };
        this.click = function (e) {
            console.log(e);
            alert(_this.props.item_name);
        };
    }
    Hello.prototype.render = function () {
        return React.createElement("div", {className: "myitem", onClick: this.click}, this.state.item_name);
    };
    Hello.propTypes = { item_name: React.PropTypes.number };
    Hello.defaultProps = { item_name: 0 };
    return Hello;
})(React.Component);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Hello;
