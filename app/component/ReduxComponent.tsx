import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect  } from 'react-redux';
import { createAction } from 'redux-actions';

interface myProp{ //傳入的prop介面
    myNum: number,
    items : [any]
}

class ReduxComponent extends React.Component<any,myProp> {
    static propTypes = {
        myNum: React.PropTypes.number.isRequired,
        items : React.PropTypes.array
    }
    static defaultProps = { myNum: 0 ,items:[]}
    constructor(props) {
        super(props);
        setTimeout(()=>{
            this.props.otherActions(1);
        },1000); //送出事件
    }
    render() {
        return <h1>ReduxComponent {this.props.myNum}!!</h1>;
    }
}

const actionCreators = createAction("ADD"); //redux-actions 生成事件

//過濾器
function select(state) {
    console.log(state);
    return state;
}

//dispatch事件綁定
function mapDispatchProps(dispatch) {
  return {
    otherActions: bindActionCreators(actionCreators, dispatch)
  };
}

export default connect(
    select,mapDispatchProps
)(ReduxComponent);
