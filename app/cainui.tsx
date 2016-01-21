import * as React from 'react';
import { connect  } from 'react-redux';
var Link = require('react-router').Link;
var routeActions = require('redux-simple-router').routeActions;
class CainUi extends React.Component<any,any> {
    constructor(props) {
        super(props);
    }
    render() {
        // console.log(this.props)
        setTimeout(this.funA.bind(this),1000);
        return <div className="cainui" >
            <Link to="/">XXXXXXX</Link>
            <p>Cain UI !! {this.props.initialCount}</p>
        </div>
    }
    funA(){
        this.props.dispatch(routeActions.push("/")); //換頁事件
    }
}
function select(state) {
    return state;
}
export default connect(
    select
)(CainUi);
