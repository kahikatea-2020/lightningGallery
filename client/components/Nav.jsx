import React, { Component } from 'react'
import homeIcon from '../images/home.png'
import {Route, Link} from '.react-router-dom'

class Nav extends Component {
  render() {
      
    return (
    
      <div className="navBar">
        <img src={homeIcon} className="homeIcon" />
        <h3>&lt;</h3>
        <h3>&gt;</h3>
        <h3>&lt;&lt;</h3>
        <h3>&gt;&gt;</h3>
      </div>
    
    )
  } 
}

export default Nav
