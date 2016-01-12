import * as React from 'react';



export default class Hello extends React.Component<any,any> {
    constructor(props) {
        super(props);
        this.state = {count:1};
    }
    tick() {
        this.setState({count: this.state.count + 1});
    }
    render() {
        return <div>
            <h1>Hello world Cain !! {this.state.count}</h1>
            <button onClick={this.tick.bind(this)}>XXX</button>
        </div>;
    }
     props:{count:1}
    // Hello.propTypes = { initialCount: React.PropTypes.number };
}
