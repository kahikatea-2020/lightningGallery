import React, { Component } from 'react'
// import homeIcon from '../images/home.png'
import { Route, Link } from 'react-router-dom'

class Nav extends Component {
  render() {
    return (

      <div className="navBar">
        {/* <img src={homeIcon} className="homeIcon" /> */}
        <i className="fas fa-home icon"></i>
        <i className="fas fa-arrow-left icon"></i>
        <i className="fas fa-arrow-right icon"></i>
        <i className="fas fa-fast-forward icon"></i>
        <i className="fas fa-fast-backward icon"></i>
      </div>

    )
  }
}

export default Nav
