import React from "react"
import './Stylesheet.css'

const Stylesheet = (props) => {
    const Flex = {color:"red"}
    let Name = props.primary ?"primary":"secondary" 
    return (
        <div>
        <h1 className= {Name} >Stylesheet</h1>
        <h1 style = {Flex}>What the fish?</h1>
        </div>
    )

}

export default Stylesheet
 