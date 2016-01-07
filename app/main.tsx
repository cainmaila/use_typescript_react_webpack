import "./less/main.less";
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Hello from './component';

main();

function main() {
    ReactDOM.render(<Hello />, document.getElementById('app'));
}
