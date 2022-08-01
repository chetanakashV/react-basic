import React from 'react'


const Data = ({persons}) => {
return (
<h1>I am {persons.name}, I am also known as {persons.heroname}, my power is {persons.power}, I have id {persons.id}</h1>

)

}

export default Data