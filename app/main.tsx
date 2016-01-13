import "./less/main.less";
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Hello from './component';
// import * as $ from 'jquery';

ReactDOM.render(<Hello />, document.getElementById('app'));
ReactDOM.render(<Hello />, document.getElementById('app2'));
window['$'] = $;
