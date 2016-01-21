import * as React from 'react';
var Link = require('react-router').Link;
export default class Hello extends React.Component<any,any> {
  render() {
    return <h1><Link to="/about">AAAA Hello world Cain !!</Link>{this.props.children}</h1>;
  }
}
