import React, { Component } from 'react';

class ErrorHandling extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isError:false
        }
        
    }

    static getDerivedStateFromError(error){
        return {
            isError: true
        }
    }
    render() {
        if(this.state.isError){return(<h1>You are a dumbass</h1>)}
        return (
                this.props.children
        );
    }
}

export default ErrorHandling;