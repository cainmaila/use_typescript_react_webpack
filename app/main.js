"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
require("./less/main.less");
var React = require('react');
var ReactDOM = require('react-dom');
var component_1 = require('./component');
var component2_tsx_1 = require('./component2.tsx');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;
var Link = require('react-router').Link;
var IndexLink = require('react-router').IndexLink;
var browserHistory = require('react-router').browserHistory;
var ACTIVE = { color: 'red' };
var App = (function (_super) {
    __extends(App, _super);
    function App() {
        _super.apply(this, arguments);
    }
    App.prototype.render = function () {
        return (React.createElement("div", null, React.createElement("h1", null, "APP!"), React.createElement("ul", null, React.createElement("li", null, React.createElement(Link, {to: "/", activeStyle: ACTIVE}, "/")), React.createElement("li", null, React.createElement(IndexLink, {to: "/", activeStyle: ACTIVE}, "/ IndexLink")), React.createElement("li", null, React.createElement(Link, {to: "/users", activeStyle: ACTIVE}, "/users")), React.createElement("li", null, React.createElement(IndexLink, {to: "/users", activeStyle: ACTIVE}, "/users IndexLink")), React.createElement("li", null, React.createElement(Link, {to: "/users/ryan", activeStyle: ACTIVE}, "/users/ryan")), React.createElement("li", null, React.createElement(Link, {to: { pathname: '/users/ryan', query: { foo: 'bar' } }, activeStyle: ACTIVE}, "/users/ryan?foo=bar")), React.createElement("li", null, React.createElement(Link, {to: "/about", activeStyle: ACTIVE}, "/about"))), this.props.children));
    };
    return App;
})(React.Component);
var Index = (function (_super) {
    __extends(Index, _super);
    function Index() {
        _super.apply(this, arguments);
    }
    Index.prototype.render = function () {
        return (React.createElement("div", null, React.createElement("h2", null, "Index!")));
    };
    return Index;
})(React.Component);
var Users = (function (_super) {
    __extends(Users, _super);
    function Users() {
        _super.apply(this, arguments);
    }
    Users.prototype.render = function () {
        return (React.createElement("div", null, React.createElement("h2", null, "Users"), this.props.children));
    };
    return Users;
})(React.Component);
var UsersIndex = (function (_super) {
    __extends(UsersIndex, _super);
    function UsersIndex() {
        _super.apply(this, arguments);
    }
    UsersIndex.prototype.render = function () {
        return (React.createElement("div", null, React.createElement("h3", null, "UsersIndex")));
    };
    return UsersIndex;
})(React.Component);
var User = (function (_super) {
    __extends(User, _super);
    function User() {
        _super.apply(this, arguments);
    }
    User.prototype.render = function () {
        return (React.createElement("div", null, React.createElement("h3", null, "User ", this.props.params.id)));
    };
    return User;
})(React.Component);
var About = (function (_super) {
    __extends(About, _super);
    function About() {
        _super.apply(this, arguments);
    }
    About.prototype.render = function () {
        return (React.createElement("div", null, React.createElement("h2", null, "About")));
    };
    return About;
})(React.Component);
ReactDOM.render((React.createElement(Router, {history: browserHistory}, React.createElement(Route, {path: "/"}, React.createElement(IndexRoute, {component: component_1.default}), React.createElement(Route, {path: "about", component: component2_tsx_1.default}), React.createElement(Route, {path: "*", component: User})))), document.getElementById('app'));
