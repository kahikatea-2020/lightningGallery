import React, { Component } from 'react'
import Comment from './Comment'


class Comments extends Component {
  state = { display: false }

  render() {
    return (
      <div>
        <Comment comment='Chris loves korean girls' />
        <Comment comment='Chris loves japanese girls' />
        <Comment comment='Chris loves anime girls' />
      </div >
    )
  }
}

export default Comments
