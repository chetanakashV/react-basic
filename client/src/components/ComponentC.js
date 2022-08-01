import React, { Component } from 'react';
import ComponentD from './ComponentD';
import {UserProvider} from './userContext'

class ComponentC extends Component {
    render() {
        return (
            <div>
                
                <ComponentD/>
            </div>
        );
    }
}

export default ComponentC;