import React, { Component } from 'react'

class Nav extends Component {
  render() {
    const navBar = ['Home', '<', '>']
    const { id ,topics, description } = this.props.topics
  }
  return(
    <div className = "navBar" >
      <h3>{description}</h3>
    </div>
  )
}