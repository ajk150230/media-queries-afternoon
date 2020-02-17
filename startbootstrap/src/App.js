import React, { Component } from 'react'
import './Reset.css'
import './App.css'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      isOpen: true
    }
  }
  render() {
    return (
      <div>
        <div>
          <nav className='navbar'>
            <h1>Start Bootstrap</h1>
            <ul className='menulist'>
              <h3>SERVICES</h3>
              <h3>PORTFOLIO</h3>
              <h3>ABOUT</h3>
              <h3>TEAM</h3>
              <h3>CONTACT</h3>
            </ul>
            <img
              id='hamburger'
              onClick={() => this.setState({ isOpen: !this.state.isOpen })}
              src='https://i.ya-webdesign.com/images/hamburger-menu-icon-png-white-6.png' />
          </nav>
          <menu className={this.state.isOpen === true ? "menu-open" : ""}>
            <h3>SERVICES</h3>
            <h3>PORTFOLIO</h3>
            <h3>ABOUT</h3>
            <h3>TEAM</h3>
            <h3>CONTACT</h3>
          </menu>
        </div>
        <section className='backgroundimg'>
        </section>
      </div>
    )
  }
}
