import React from 'react'
import { Rating } from 'semantic-ui-react'

class Card extends React.Component {
  render() {
    return (
      <div className="ui card">
        <div className="image">
          <img src="https://upload.wikimedia.org/wikipedia/en/thumb/6/6f/Lodash.svg/440px-Lodash.svg.png" />
        </div>
        <div className="content">
          <a className="header">TOPIC TITLE</a>
          <div className="meta">
            <span className="date">Presented by Park mi</span>
          </div>
          <div className="description">
            Kristy is an art director living in New York.
          </div>
        </div>
        <div className="extra content">
          Rating:
          <Rating disabled icon='star' defaultRating={4} maxRating={5} />
        </div>
      </div>

    )
  }
}
export default Card
