import React from "react"
import { Rating } from "semantic-ui-react"
import { withRouter } from "react-router-dom"

import { getTopicsComments } from "../api"

class Card extends React.Component {
  state = {
    comments: "",
  }

  componentDidMount() {
    getTopicsComments().then((res) => {
      this.setState({ comments: res.data })
    })
  }

  getAverage = () => {}

  render() {
    const { id, title, presenter, url, description } = this.props.topic
    return (
      <>
        <div
          onClick={() => this.props.history.push(`/topic/${id}`)}
          className='ui card'
        >
          <div className='image'>
            <img src={url} />
          </div>
          <div className='content'>
            <a className='header'>{title}</a>
            <div className='meta'>
              <span className='date'>{presenter}</span>
            </div>
            <div className='description'>{description}</div>
          </div>
          <div className='extra content'>
            Rating:
            <Rating disabled icon='star' defaultRating={4} maxRating={5} />
          </div>
        </div>
      </>
    )
  }
}
export default withRouter(Card)
