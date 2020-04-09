import React from 'react'
import Nav from './Nav'

class Home extends React.Component {
  render () {
    return (
      <div className="home">
        <Nav/>
        <div className="homeGallery">

          {[1,2,3,4,5,6,7,8].map( () => {
            return (
              
                <div className="ui card">
                            <div className="image">
                              <img src="https://upload.wikimedia.org/wikipedia/en/thumb/6/6f/Lodash.svg/440px-Lodash.svg.png"/>
                            </div>
                            <div className="content">
                              <a className="header">Kristy</a>
                              <div className="meta">
                                <span className="date">Joined in 2013</span>
                              </div>
                              <div className="description">
                      Kristy is an art director living in New York.
                              </div>
                            </div>
                            <div className="extra content">
                              <a>
                                <i className="user icon"></i>
                      22 Friends
                              </a>
                            </div>
                          </div>
                            
            )
          })}
          
        </div>

      </div>
    )
  }
}

export default Home
