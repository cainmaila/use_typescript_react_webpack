import * as React from 'react';
import MyItem from './my_item';
export default class Hello extends React.Component<any,any> {

    static propTypes = {
        initialCount: React.PropTypes.number.isRequired,
        items : React.PropTypes.array
    }
    static defaultProps = { initialCount: 0 ,items:[1,2,3,4,5]}
    state = {
        count: this.props.initialCount,
    }
    constructor(props) {
        super(props);
        // this.state = {count:1};
    }

    render() {
        return <div>
            <h1>Hello world Cain !! {this.state.count}</h1>
            <button onClick={this.tick.bind(this)}>XXX</button>
            <div>
                {
                    this.props.items.map((item_var,id)=>{
                            return <MyItem item_name={item_var}></MyItem>
                        }
                    )
                }
            </div>
        </div>
    }

    tick = ()=> {
        this.setState({count: this.state.count + 1});
    }

}
