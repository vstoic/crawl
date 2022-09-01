// src/components/main/main_page.js

import React from "react";
import NavBarContainer from "../nav/navbar_container"
import "../../assets/stylesheets/main.css";


class MainPage extends React.Component {

componentDidMount(){
  
}

  render() {
    return (
      <div className="main-page-container">
        <div className="main-left-container">
          <div className="category-container">
            category-container</div>
          <div className="developers-container">
            developers-container</div>
        </div>
        <div className="main-crawl-container">
          <div className="crawl-container">
              <h1>Crawl Name</h1>
              <h2>Website</h2>
              <div className="crawl-venue-container">
                <li>Venue Name1</li>
                <li>Venue Name1</li>
                <li>Venue Name1</li>
              </div>
              <div className="mp-image-container">
                <img src="" className="main-page-image"/>
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainPage;
