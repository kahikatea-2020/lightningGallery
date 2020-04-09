<<<<<<< HEAD
import React, { Component } from 'react'
// import homeIcon from '../images/home.png'
import { Route, Link } from 'react-router-dom'
=======
import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
>>>>>>> b17fa055d341968b88721308eda1e0b961093358

class Nav extends Component {
  render() {
    return (
<<<<<<< HEAD

      <div className="navBar">
        {/* <img src={homeIcon} className="homeIcon" /> */}
        <i className="fas fa-home icon"></i>
        <i className="fas fa-arrow-left icon"></i>
        <i className="fas fa-arrow-right icon"></i>
        <i className="fas fa-fast-forward icon"></i>
        <i className="fas fa-fast-backward icon"></i>
      </div>

    )
=======
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
>>>>>>> b17fa055d341968b88721308eda1e0b961093358
  }
}

export default Nav;
