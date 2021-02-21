import './Nav.css'
import React, { Component } from 'react'

class Nav extends Component {
  openHome = () => {
    const about = document.querySelector("main");
    about.scrollIntoView();
  }

  openServices = () => {
    const projects = document.querySelector(".projects");
    projects.scrollIntoView();
  }
  openContact = () => {
    const contact = document.querySelector("footer");
    contact.scrollIntoView();
  }

  render() {
    return (
      <nav>
        <p onClick={this.openHome} className="button top">
          About
        </p>
        <p onClick={this.openServices} className="button services">
          Projects
        </p>
        <p onClick={this.openContact} className="button contact">
          Contact
        </p>
      </nav>
    );
  }
}

export default Nav;