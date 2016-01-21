declare var require: any;

import "./less/main.less";
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Hello from './component';
import Hello2 from './component2.tsx';
// import { Router, Route, IndexRoute, Link, IndexLink, browserHistory } from 'react-router'
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;
var Link = require('react-router').Link;
var IndexLink = require('react-router').IndexLink;
var browserHistory = require('react-router').browserHistory;

const ACTIVE = { color: 'red' }

class App extends React.Component<any, any> {
  render() {
    return (
      <div>
        <h1>APP!</h1>
        <ul>
          <li><Link      to="/"           activeStyle={ACTIVE}>/</Link></li>
          <li><IndexLink to="/"           activeStyle={ACTIVE}>/ IndexLink</IndexLink></li>

          <li><Link      to="/users"      activeStyle={ACTIVE}>/users</Link></li>
          <li><IndexLink to="/users"      activeStyle={ACTIVE}>/users IndexLink</IndexLink></li>

          <li><Link      to="/users/ryan" activeStyle={ACTIVE}>/users/ryan</Link></li>
          <li><Link      to={{ pathname: '/users/ryan', query: { foo: 'bar' } }}
                                          activeStyle={ACTIVE}>/users/ryan?foo=bar</Link></li>

          <li><Link      to="/about"      activeStyle={ACTIVE}>/about</Link></li>
        </ul>

        {this.props.children}
      </div>
    )
  }
}

class Index extends React.Component<any, any> {
  render() {
    return (
      <div>
        <h2>Index!</h2>
      </div>
    )
  }
}

class Users extends React.Component<any, any> {
  render() {
    return (
      <div>
        <h2>Users</h2>
        {this.props.children}
      </div>
    )
  }
}

class UsersIndex extends React.Component<any, any> {
  render() {
    return (
      <div>
        <h3>UsersIndex</h3>
      </div>
    )
  }
}

class User extends React.Component<any, any> {
  render() {
    return (
      <div>
        <h3>User {this.props.params.id}</h3>
      </div>
    )
  }
}

class About extends React.Component<any, any> {
  render() {
    return (
      <div>
        <h2>About</h2>
      </div>
    )
  }
}

ReactDOM.render((
    <Router history={browserHistory}>
      <Route path="/">
        <IndexRoute component={Hello}/>
        <Route path="about" component={Hello2}/>
        <Route path="*" component={User}/>
      </Route>
    </Router>
), document.getElementById('app'));
