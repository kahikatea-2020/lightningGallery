import React from "react"
import Topic from "./Topic"
import Home from "./Home"
import TopicForm from "./TopicForm"
// import Form from './Form'
import { Route } from "react-router-dom"
const App = () => {
  return (
    <>
      <Route exact path='/' component={Home} />
      <Route path='/topic/:id' component={Topic} />
      <Route exact path='/topic/new' component={TopicForm} />
    </>
  )
}

export default App
