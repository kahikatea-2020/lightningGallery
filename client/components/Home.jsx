import React from "react"
import Nav from "./Nav"
import Card from "./Card"
import { getTopics } from "../api"

class Home extends React.Component {
  state = {
    topics: "",
  }

  componentDidMount() {
    getTopics().then((topics) => {
      this.setState({ topics: topics.data })
    })
  }

  render() {
    if (this.state.topics === "") return <div>Loading</div>
    return (
      <div className='home'>
        <Nav />
        <div className='homeGallery'>
          {this.state.topics.map((topic, i) => {
            return <Card key={i} topic={topic} />
          })}
        </div>
      </div>
    )
  }
}

export default Home
