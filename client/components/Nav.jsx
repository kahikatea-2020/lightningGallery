import React, { Component } from "react";
import { Route, Link, withRouter } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <div className="navBar">
        <div className="logo"></div>
        <div className="title">TITLE</div>
        <div className="addTopic">
          <button onClick={() => this.props.history.push("/topic/new")}>
            ADD TOPIC
          </button>
        </div>
        <div className="homeBtn">
          <button onClick={() => this.props.history.push("/")}>
            <i className="fas fa-home icon"></i>
          </button>
        </div>
        <div className="about">About</div>
      </div>
    );
  }
}

export default withRouter(Nav);
