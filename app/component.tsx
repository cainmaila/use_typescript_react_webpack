import * as React from 'react';
import MyItem from './my_item';
import { connect  } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createAction, handleAction, handleActions } from 'redux-actions';

class Hello extends React.Component<any,any> {

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
        return <div>
            <h1>Hello world Cain !! {this.props.initialCount}</h1>
            <button onClick={this.tick}>XXX</button>
            <div>
                {
                    this.props.items.map((item_ob,id)=>{
                            return <MyItem item_name={item_ob.item_name} keyId={id} key={id} tickKey={this.tickKey}></MyItem>
                        }
                    )
                }
            </div>
        </div>
    }
    tick = (e)=> {
        e.stopPropagation();
        this.props.otherActions(5);
        // this.props.dispatch({type:"ADD",key:1});
    }
    tickKey = key => {
        this.props.otherActions(key);
    }
}
var actionCreators = createAction("ADD"); //redux-actions 生成事件
// state 将由 store 提供
function select(state) {
    console.log(state);
    return state;
}
// 哪些 action 创建函数是我们想要通过 props 获取的？
function mapDispatchProps(dispatch) {
  return {
    otherActions: bindActionCreators(actionCreators, dispatch)
  };
}

export default connect(
    select,mapDispatchProps
)(Hello);
