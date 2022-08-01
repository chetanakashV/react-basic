import React, { Component } from 'react';

class ClickTwo extends Component {
    render() {
        return (
            <div>
                <button onClick = {this.props.incrementCount}> This is clicked {this.props.count} no of times</button>
            </div>
        );
    }
}

export default ClickTwo;