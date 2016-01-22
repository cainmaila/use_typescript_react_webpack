import * as React from 'react';
import { connect  } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createAction } from 'redux-actions';
var routeActions = require('redux-simple-router').routeActions;
class LoginView extends React.Component<any,any> {

    static propTypes = {
        initialCount: React.PropTypes.number.isRequired,
        items : React.PropTypes.array
    }
    static defaultProps = { initialCount: 0 ,items:[]}
    state = {
        count: this.props.initialCount,
    }
    constructor(props) {
        super(props);
    }

    render() {
        return <div className="loginView">
            <div className="fm">
                  <div className="til">帳號</div>
                  <input type="text" name="u_id" />
                  <div className="til">密碼</div>
                  <input type="password" name="u_password" />
            </div>
            <button id="bn" onClick={this.bnClick}>送出</button>
      </div>
    }
    bnClick = (e)=> {
        e.stopPropagation(e);
        this.props.logininActions({test:"test"});
    }
}
var logininActionCreators = createAction("LOGIN_SENT"); //redux-actions
function select(state) {
    return state;
}
// 哪些 action 创建函数是我们想要通过 props 获取的？
function mapDispatchProps(dispatch) {
  return {
    logininActions: bindActionCreators(logininActionCreators, dispatch)
  };
}

export default connect(
    select,mapDispatchProps
)(LoginView);
