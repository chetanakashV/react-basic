import React from 'react'
import './components/App.css'
import {Landing,SuperheroLanding}  from './components/welcome_page';
import Thomas from './components/Thomas';
import Person from './components/Person';
import Stylesheet from './components/Stylesheet.js'
import Register from './components/auth/Register';
import RefsDemo from './components/RefsDemo';
import FocusInput from './components/FocusInput';
import ForwardParent from './components/ForwardParent';
import PortalDemo from './components/PortalDemo';
import Hero from './components/Hero';
import ErrorHandling from './components/ErrorHandling';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import User from './components/User';
import ClickTwo from './components/ClickTwo';
import HoverTwo from './components/HoverTwo';
import ComponentC from './components/ComponentC';
import ComponentE from './components/ComponentE';
import { UserProvider } from './components/userContext';

const App = (props) => {
  return ( 
    <div className="App">
    {/* <Landing name="bruce wayne" heroname="batman"/>
    <SuperheroLanding name="bruce wayne" heroname="batman"/> */}
    <h1>Hello world</h1>
    {/* <Thomas/>
    <Person key = 'unique'/>
    <Stylesheet primary={false}/>
    <Register/>
    */}
    {/* <RefsDemo/> */}
    {/* <FocusInput/> */}
    {/* <ForwardParent/> */}
    {/* <PortalDemo/> */}
    {/* <ErrorHandling>
    <Hero heroname={'batman'}/>
    </ErrorHandling>
    <ErrorHandling>
    <Hero heroname={'superman'}/>
    </ErrorHandling>
    <ErrorHandling>
    <Hero heroname={'joker'}/>
    </ErrorHandling> */}
   {/* <ClickCounter/>
   <HoverCounter/> */}
   {/* <User render  = {(count,incrementCounter) => (<ClickTwo count = {count} incrementCount = {incrementCounter}/>)}/>
   <User render  = {(count,incrementCounter) => (<HoverTwo count = {count} incrementCount = {incrementCounter}/>)}/> */}
   <UserProvider value = "chetan">
   <ComponentC />
   </UserProvider>
    </div>
     
  );
}

export default App;
