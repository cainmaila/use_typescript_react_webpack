"use strict";
require("./less/main.less");
var React = require('react');
var ReactDOM = require('react-dom');
var Hello_1 = require('./component/Hello');
main();
function main() {
    ReactDOM.render(React.createElement(Hello_1.default, null), document.getElementById('app'));
}
