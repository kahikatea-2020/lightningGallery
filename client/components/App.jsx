import React from "react";
import Topic from "./Topic";
import Home from "./Home";
import TopicForm from "./TopicForm";
import { Route } from "react-router-dom";
const App = () => {
  return (
    <>
      <Route exact path="/" component={Home} />
      <Route exact path="/topic/new" component={TopicForm} />
      <Route exact path="/topic/:id" component={Topic} />
    </>
  );
};

export default App;
