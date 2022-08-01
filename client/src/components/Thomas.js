import React, { Component } from 'react'
import Bruce from './Bruce'

class Thomas extends Component  {

    constructor(props){
        super(props)

        this.state = {
            parentName : 'thomas wayne',
            loggedInstatus: false
        }
        
        this.greetParent = this.greetParent.bind(this)
    }

     greetParent(childName){
        alert(`greetings to ${this.state.parentName} from ${childName}`)
    }

    render(){
    //    if(this.state.loggedInstatus){
    //     return <div>you are logged in dude</div>
    //    }
    //    else{
    //     return <div>You are not logged in</div>
    //    }
    return (

        !this.state.loggedInstatus &&  <Bruce greethandler={this.greetParent}/>)
    }
}

export default Thomas