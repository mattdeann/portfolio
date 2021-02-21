import './Nav.css'
import React, { Component } from 'react'

class Nav extends Component {
  openAbout = () => {
    const about = document.querySelector("main");
    about.scrollIntoView();
  }

  openProjects = () => {
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
        <p onClick={this.openAbout} className="button top">
          About
        </p>
        <p onClick={this.openProjects} className="button services">
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