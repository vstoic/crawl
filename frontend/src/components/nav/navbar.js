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
    console.log(this.props.history);
    window.history.pushState({ urlPath: "/#/" }, "", "/#/");
  }

  getLinks() {
    if (this.props.loggedIn) {
      return (
        <div className="nav-container">
          <div className="logo-container">
            <Link to="/">
              <img
                className="logo"
                src="https://i.postimg.cc/8zjb85Sr/Crawl-logo-transparent.png"
              />
            <img
              className="logo-image-snail"
              src="https://i.postimg.cc/tRWyZch1/snail-logo.png"
            />
            </Link>
          </div>
          <div className="search-container">
            <div></div>
          </div>
          <div className="nav-right">

           

            <Link to={"/venueCreate"} className="nav-other-button">
              Create a Venue
            </Link>

            <Link
              to={`/users/${this.props.currentUser.id}`}
              className="nav-other-button"
            >
              Profile
            </Link>
            <Link to={"/venues"} className="nav-other-button">
              Venues
            </Link>
            <Link to={"/crawls"} className="nav-other-button">
              Crawls
            </Link>
            <button onClick={this.logoutUser} className="nav-logout-button">
              Logout
            </button>
          </div>
        </div>
      );
    } else {
      return (
        <div className="nav-container">
          <div className="logo-container">
            <Link to="/">
              <img
                className="logo"
                src="https://i.postimg.cc/8zjb85Sr/Crawl-logo-transparent.png"
              />
              <img
                className="logo-image-snail"
                src="https://i.postimg.cc/tRWyZch1/snail-logo.png"
              />
            </Link>
          </div>
          <div className="search-container">
            <div></div>
          </div>
          <div className="nav-right">
            {/* <Link to={"/venueCreate"} className="nav-other-button">
              Create Venue
            </Link>
            <Link to={"/venues"} className="nav-other-button">
              Venues
            </Link>
            <Link to={"/crawls"} className="nav-other-button">
              Crawls
            </Link> */}
            <Link to={"/login"} className="nav-signup-button">
              Login
            </Link>
            <Link to={"/signup"} className="nav-signup-button">
              Sign Up
            </Link>
          </div>
        </div>
      );
    }
  }
  render() {
    console.log("LoggedIn?==>", this.props.loggedIn);
    return <div>{this.getLinks()}</div>;
  }
}

export default NavBar;
