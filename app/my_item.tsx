import * as React from 'react';
import Sig from './mySignal';
export default class My_Item extends React.Component<any,any> {
    static propTypes = { item_name: React.PropTypes.number }
    static defaultProps = { item_name: 0 }
    state = {
        item_name: this.props.item_name,
    }
    constructor(props) {
        super(props);
    }
    render() {

        return <div className="myitem" onClick={this.click}>{this.props.item_name}</div>
    }
    click = (e)=>{
        // console.log(console.log(this.props));
        this.props.tickKey(this.props.keyId);
        // this.props.dispatch({type:"ADD",key:this.props.key});
        // this.setState({item_name: this.props.item_name+1});
        // Sig.sig.dispatch(this.props.item_name);
    }
}
