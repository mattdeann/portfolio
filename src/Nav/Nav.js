import './Nav.css'
import React, { Component } from 'react'

class Nav extends Component {
  openHome = () => {
    
  }
  openServices = () => {
    const services = document.querySelector("main");
    services.scrollIntoView();
  }
  openContact = () => {
    const contact = document.querySelector("footer");
    contact.scrollIntoView();
  }

  render() {
    return (
      <nav>
        <p onClick={this.openHome} className="button top">
          HOME
        </p>
        <p onClick={this.openServices} className="button services">
          SERVICES
        </p>
        <p onClick={this.openContact} className="button contact">
          CONTACT
        </p>
      </nav>
    );
  }
}

export default Nav;