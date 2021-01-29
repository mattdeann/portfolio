import './Nav.css'
import React, { Component } from 'react'

class Nav extends Component {
  openServices = () => {

  }
  openContact = () => {

  }
  openAbout = () => {

  }

  render() {
    return (
      <nav>
        <p onClick={this.openServices} className="button top">
          SERVICES
        </p>
        <p onClick={this.openContact} className="button services">
        CONTACT
        </p>
        <p onClick={this.openAbout} className="button contact">
          ABOUT
        </p>
      </nav>
    );
  }
}

export default Nav;