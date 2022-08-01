import React, { Component } from 'react';

class HoverTwo extends Component {

    render() {
        const{count,incrementCount} = this.props
        return (
            <div>
              <h1 onMouseOver={incrementCount} > this line is hovered {count} no of times</h1>
            </div>
        );
    }
}

export default HoverTwo;