import React,{useState} from 'react'

const Register = () => {
    const [username,setUserName] = useState("")
    const [email,setEmail] = useState("")

    const handleUserNameChange = (event) => {
       setUserName(event.target.value)
    } 
    const handleEmailChange = (event) => {  
       setEmail(event.target.value)
    } 
    const handleSubmit = (event) => { 
        alert(`your user name is ${username} and your email is  ${email}`)
        event.preventDefault()
    }

    return( 
        <form onSubmit={handleSubmit}>
            <br/><br/><br/><br/><br/><br/>
            <label >Username </label><br/>
            <input type= {"text"} placeholder = 'UserName...' value = {username} onChange = {handleUserNameChange} /><br/><br/>
            <label>Email</label><br/>
            <input type={"email"} placeholder = 'Email...' value = {email} onChange = {handleEmailChange} /><br/><br/>
            <button type = {'submit'} > Register </button>
        </form>
    )
} 

export default Register 