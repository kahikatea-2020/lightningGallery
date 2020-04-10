import React, { Component } from "react"
import Nav from "./Nav"
import Comments from "./comments"
import { Rating } from "semantic-ui-react"
import { getTopic } from "../api"

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
        <div>
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
            <div className='container'>
              <h1>Comments</h1>
              <div className='addComment'>
                <div className='commentImg'></div>
                <input
                  className='commentInput'
                  name='newComment'
                  type='text'
                  placeholder='posting publicly as guest'
                />
                <button className='postComment'>Post Comment</button>
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
