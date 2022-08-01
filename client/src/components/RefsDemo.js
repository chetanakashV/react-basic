import React, { Component } from 'react'
import  ReactDOM  from 'react-dom'

class RefsDemo extends Component  {
    constructor(props){
        super(props)
        this.inputref = React.createRef()
    } 
    
    // componentDidMount() {
    //         this.inputref.current.focus()
    //         console.log(this.inputref)
    //     }
        
    clickHandler = () => {
        // this.inputref.current.focus()
        // // alert(this.inputref.current.value)
        alert('it is updating')
    }

    render(){
        return ReactDOM.createPortal(
            <form >
            <input type = {"text"}  ref={this.inputref}/><br/>
            <button onClick = {this.clickHandler}> click me</button>
            
            </form>,document.getElementById('portal-design')
            
        )
    }
}

export default RefsDemo