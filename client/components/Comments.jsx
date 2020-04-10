import React, { Component } from "react"
import Comment from "./Comment"
import { getTopicsComments } from "../api/index"

class Comments extends Component {
  state = {
    comments: "",
  }

  componentDidMount() {
    getTopicsComments(this.props.topicId).then((result) => {
      this.setState({
        comments: result.data,
      })
    })
  }
  render() {
    console.log(this.state.comments)
    if (this.state.comments === "") {
      return <div>Loading</div>
    }
    return this.state.comments.map((object) => {
      return <Comment comment={object.comments} />
    })
  }
}

export default Comments
