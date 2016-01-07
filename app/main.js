"use strict";
require("./less/main.less");
var React = require('react');
var ReactDOM = require('react-dom');
var component_1 = require('./component');
main();
function main() {
    ReactDOM.render(React.createElement(component_1.default, null), document.getElementById('app'));
}
