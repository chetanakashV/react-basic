import React, { Component } from 'react';
import UpdatedComponent from './WithCounter';

class HoverCounter extends Component {
    

    render() {
        const  {count,incrementCount} = this.props
        return (
            <div>
                    <h1 onMouseOver={incrementCount}> This is hovered  {count} no of times</h1>
                <br/> <button onClick = {this.resetCounter}>Reload Hover</button>
            </div>
        );
    }
}

export default UpdatedComponent(HoverCounter);