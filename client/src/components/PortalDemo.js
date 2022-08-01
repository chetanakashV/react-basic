import React from 'react';
import  ReactDOM from 'react-dom';

const PortalDemo = () => {
    return ReactDOM.createPortal(
        <h1>Hello, I am using portal</h1>,document.getElementById('portal-modal')
    ) 
}


export default PortalDemo