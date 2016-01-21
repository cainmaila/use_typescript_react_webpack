import * as React from 'react';
var Link = require('react-router').Link;
export default class CainUi extends React.Component<any,any> {
    constructor(props) {
        super(props);
    }
    render() {
        return <div className="cainui" >
            <Link to="/">XXXXXXX</Link>
            <p>Cain UI !!</p>
        </div>
    }
}
