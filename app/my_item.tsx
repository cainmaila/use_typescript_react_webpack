import * as React from 'react';

export default class Hello extends React.Component<any,any> {
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
        console.log(e);
        alert(this.props.item_name);
    }
}
