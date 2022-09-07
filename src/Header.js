import React, { Component } from "react";
import {
  Link
} from "react-router-dom";
import './Header.css'

import logo from './logo.svg';
import Clock from './Clock';

class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <div>
          <img src={logo} className="App-logo" alt="logo" />
          <Clock />
          <p style={{ margin: 5 }}>
            {this.props.header}
          </p>
        </div>
        
          <div className="Menu">
            <ul>
              <li> <Link to="/content">Content</Link></li>
              <li> <Link to="/forms">Forms</Link></li>
              <li> <Link to="/life-cycle">LifeCycle</Link></li>
              <li> <Link to="/learn-more">LearnMore</Link></li>
            </ul>
          </div>
       
      </header>
    )
  }
}

export default Header;