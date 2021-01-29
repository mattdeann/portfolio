import React, { Component } from 'react'
import './App.css';
import Nav from '../Nav/Nav'
import Header from '../Header/Header'
import Main from '../Main/Main'
import Footer from '../Footer/Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
