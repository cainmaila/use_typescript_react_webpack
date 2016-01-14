import * as React from 'react';
import { connect  } from 'react-redux';
import { bindActionCreators } from 'redux';
class My_Item extends React.Component<any,any> {
    static propTypes = { item_name: React.PropTypes.number }
    static defaultProps = { item_name: 0 }
    state = {
        item_name: this.props.item_name,
    }
    constructor(props) {
        super(props);
    }
    render() {

        return <div className="myitem" onClick={this.click}>{this.state.item_name}</div>
    }
    click = (e)=>{
        let { dispatch } = this.props;
        dispatch({type:"ADD",num:1});
        // console.log(e);
        // alert(this.props.item_name);
        // this.setState({item_name: this.props.item_name+1});
    }
}
// state 将由 store 提供
function select(state,acc) {
  return {
    item_name: state.item_name
  };
}
// 哪些 action 创建函数是我们想要通过 props 获取的？
function mapDispatchToProps(dispatch) {
  return {
    onIncrement: () => dispatch(this.click())
  };
}
// 最终暴露 经 connect 处理后的组件
export default connect(
    select
)(My_Item);
