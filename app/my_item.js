"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var My_Item = (function (_super) {
    __extends(My_Item, _super);
    function My_Item(props) {
        var _this = this;
        _super.call(this, props);
        this.state = {
            item_name: this.props.item_name,
        };
        this.click = function (e) {
            console.log(console.log(_this.props));
            _this.props.tickKey(_this.props.keyId);
        };
    }
    My_Item.prototype.render = function () {
        return React.createElement("div", {className: "myitem", onClick: this.click}, this.props.item_name);
    };
    My_Item.propTypes = { item_name: React.PropTypes.number };
    My_Item.defaultProps = { item_name: 0 };
    return My_Item;
})(React.Component);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = My_Item;
