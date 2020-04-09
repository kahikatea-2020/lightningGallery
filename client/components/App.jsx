import React from 'react'
import Topic from './Topic'
import Home from './Home'
import Form from './Form'
import {Route, Link} from '.react-router-dom'
const App = () => {
  return (
    <Route exact path ="/" component = {Home}/>
    <Route path="/topic/:id" component = {Topic} />
    <Route path="/form" component ={Form} /> 
  )
}

export default App
