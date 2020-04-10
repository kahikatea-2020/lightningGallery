import React, { Component } from "react"
import Nav from "./Nav"
import Comments from "./comments"
import { Rating } from "semantic-ui-react"
import { getTopic, newComment } from "../api"
class Topic extends Component {
  state = {
    topic: "",
  }

  componentDidMount() {
    getTopic(this.props.match.params.id).then((topic) => {
      this.setState({ topic: topic.data })
    })
  }
  render() {
    const { topic } = this.state
    if (topic === "") return <div>Loading</div>
    return (
      <div className='topic'>
        <Nav />
        <div className='topicContent'>
          <div className='topicMain'>
            <div className='topicImg'>
              <img src={topic.url} />
            </div>
            <div className='topicText'>
              <h1>{topic.title}</h1>
              <h4>{topic.name}</h4>
              <h4>Description</h4>
              <p>{topic.description}</p>
              <div>
                <div className='topicRating'>
                  <h4>Rating</h4>
                  <Rating
                    disabled
                    icon='star'
                    defaultRating={4}
                    maxRating={5}
                  />
                </div>
                <button>EDIT INFO</button>
              </div>
            </div>
          </div>

          <div>
            <div className='comments container'>
              <h1>Comments</h1>
              <div className='addComment'>
                <div className='commentImg'>
                  <img
                    src='https://uploads.scratch.mit.edu/users/avatars/395/5762.png'
                    alt='guest image'
                  />
                </div>
                <form action='api'>
                  <input
                    className='commentInput'
                    name='newComment'
                    type='text'
                    placeholder='posting publicly as guest'
                  />
                  <button type='submit' className='postComment'>
                    Post Comment
                  </button>
                </form>
              </div>
              <Comments />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Topic
