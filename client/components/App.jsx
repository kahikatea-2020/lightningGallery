import React from 'react'
import Topic from './Topic'
import Home from './Home'
// import Form from './Form'
import { Route } from 'react-router-dom'
const App = () => {
  return (
    <div>
      <Route exact path ="/" component = {Home}/>
      <Route path="/topic/:id" component = {Topic} />
      {/* <Route path="/form" component ={Form} /> */}
    </div>

  )
}

export default App
