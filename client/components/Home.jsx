import React from 'react'
import Nav from './Nav'
import Card from './Card'
class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <Nav />
        <div className="homeGallery">

          {[1, 2, 3, 4, 5, 6, 7, 8].map(() => {
            return (
              <Card />
            )
          })}
        </div>
      </div >
    )
  }
}

export default Home
