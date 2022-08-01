import  React from 'react'

const UserContext = React.createContext("Guest");

const UserProvider = React.UserProvider
const UserConsumer = React.UserConsumer

export {UserConsumer,UserProvider}