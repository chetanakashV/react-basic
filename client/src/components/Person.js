import React from 'react'
import Data from './Data'

const Person = () => {
const persons = [{id: 1,name:'bruce wayne',heroname:'batman',power:'rich'},{id: 2,name:'diana ',heroname:'wonder woman',power:'amazon warrior'},{id:3,name:'clar kent',heroname:'super man',power:'cool stuff'}]
const personList = persons.map(persons => <Data key={persons.id} persons= {persons}/>)

// return(<personList/>)
return <div>{personList}</div>
}

export default Person