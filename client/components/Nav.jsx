import React, { Component } from "react";
import { Route, Link } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <div className="navBar">
        <div className="logo">LOGO</div>
        <div className="title">TITLE</div>
        <div className="addTopic">
          <button>Add topic</button>
        </div>
        <div className="homeBtn">
          <button>Home Button</button>
        </div>
        <div className="about">About</div>
        {/* <i class="fas fa-home icon"></i>
        <i class="fas fa-arrow-left icon"></i>
        <i class="fas fa-arrow-right icon"></i>
        <i class="fas fa-fast-forward icon"></i>
        <i class="fas fa-fast-backward icon"></i> */}
      </div>
    );
  }
}

export default Nav;
