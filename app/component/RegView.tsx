import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { connect  } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createAction } from 'redux-actions';
var routeActions = require('redux-simple-router').routeActions;
class RegView extends React.Component<any,any> {

    static propTypes = {
        // initialCount: React.PropTypes.number.isRequired,
        // items : React.PropTypes.array
    }
    constructor(props) {
        super(props);
    }

    render() {
        return <div id="regview">
          <div className="til">帳號</div>
          <input type="text" ref="uid" />
          <div className="til">密碼</div>
          <input type="password" ref="upwd" />
          <div className="til">顯示名</div>
          <input type="text" ref="uname" />
          <div className="til">E-Mail</div>
          <input type="text" ref="umail" />
          <div className="til">送出表單</div>
          <input type="submit" defaultValue="送出" onClick={this.bnClick}/>
      </div>
    }

    bnClick = (e)=> {
        e.preventDefault();
        let uid = ReactDOM.findDOMNode<HTMLInputElement>(this.refs["uid"]).value.trim();
        let upwd = ReactDOM.findDOMNode<HTMLInputElement>(this.refs["upwd"]).value.trim();
        let uname = ReactDOM.findDOMNode<HTMLInputElement>(this.refs["uname"]).value.trim();
        let umail = ReactDOM.findDOMNode<HTMLInputElement>(this.refs["umail"]).value.trim();
        this.props.logininActions({
            uid:uid,
            upwd:upwd,
            uname:uname,
            umail:umail
        });
        ReactDOM.findDOMNode<HTMLInputElement>(this.refs["uid"]).value = "";
        ReactDOM.findDOMNode<HTMLInputElement>(this.refs["upwd"]).value = "";
        ReactDOM.findDOMNode<HTMLInputElement>(this.refs["uname"]).value = "";
        ReactDOM.findDOMNode<HTMLInputElement>(this.refs["umail"]).value = "";
    }
}
var logininActionCreators = createAction("REG_POST"); //redux-actions
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
)(RegView);
