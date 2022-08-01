import React, { Component } from 'react';
import UpdatedComponent from './WithCounter';

class ClickCounter extends Component {
    


    render() {
        const {count,incrementCount } = this.props
        return (
            <div>
                <button onClick={incrementCount}> clicked {count} no of times</button>
            </div>
        );
    }
}

export default UpdatedComponent(ClickCounter);