// src/components/nav/navbar.js

import React from "react";
import { Link } from "react-router-dom";
import "../../assets/stylesheets/navbar.css";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
  }
  logoutUser(e) {
    e.preventDefault();
    this.props.logout();
  }
  getLinks() {
    if (this.props.loggedIn) {
      return (
        <div className="nav-container">
          <div className="logo-container">
            <Link to="/"><img className="logo"
              src="https://i.postimg.cc/8zjb85Sr/Crawl-logo-transparent.png"/></Link>
          </div>
          <div className="search-container">
            <div></div>
          </div>
          <div className="nav-right">
            <button onClick={this.logoutUser} className="nav-logout-button">Logout</button>
          </div>
        </div>
      );
    } else {
      return (
        <div className="nav-container">
          <div className="logo-container">
            <Link to="/"><img className="logo"
              src="https://i.postimg.cc/8zjb85Sr/Crawl-logo-transparent.png"/></Link>
          </div>
          <div className="search-container">
            <div></div>
          </div>
          <div className="nav-right">
            <Link to={"/login"} className="nav-login-button">Login</Link>
            <Link to={"/signup"} className="nav-signup-button">Sign Up</Link>
          </div>
        </div>
      );
    }
  }
  render() {
    console.log("Props======>", this.props.loggedIn);
    return (
      <div>
        {this.getLinks()}
      </div>
    );
  }
}

export default NavBar;
