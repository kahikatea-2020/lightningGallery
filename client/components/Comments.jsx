import React, { Component } from "react"
import Comment from "./Comment"
import { getTopicsComments } from "../api/index"

class Comments extends Component {
  state = { display: false }

  render() {
    console.log(getTopicsComments(this.props.topicId))

    return (
      <div>
        {getTopicsComments(Number(this.props.topicId)).then((comments) => {
          return comments.map((commentsObj) => {
            return <Comment comment={commentsObj.comment} />
          })
        })}
      </div>
    )
  }
}

export default Comments
