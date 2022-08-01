import React, { Component } from 'react';
import Forwardref from './Forwardref';

class ForwardParent extends Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef()
    }

    clickHandler = () => {
        this.inputRef.current.focus()
    }

    render() {
        return (
            <div>
                <Forwardref ref = {this.inputRef}/>
                <button onClick = {this.clickHandler}> click me</button>
            </div>
        );
    }
}

export default ForwardParent;