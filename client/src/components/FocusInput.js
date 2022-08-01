import React, { Component } from 'react'

class FocusInput extends Component  {
    constructor(props){
        super(props)
        this.inputref = React.createRef()
    }
    
    componentDidMount() {
            this.inputref.current.focus()
            console.log(this.inputref)
        }
        
    clickHandler = () => {
         //   this.inputref.current.focus()
        alert(this.inputref.current.value)
    }

    render(){
        return(
            <form >
            <input type = {"text"}  ref={this.inputref}/><br/>
            <button onClick = {this.clickHandler}> click me</button>
            
            </form>
            
        )
    }
}

export default FocusInput