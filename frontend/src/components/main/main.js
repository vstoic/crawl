// src/components/main/main_page.js

import React from "react";
import "../../assets/stylesheets/main.css";
import MainPageItem from "./main_page_item";


class MainPage extends React.Component {

componentDidMount(){
  this.props.fetchAllCrawls();
}

  render() {
    // debugger
    return (
      <div className="main-page-container">
        <div className="main-left-container">
          {/* <div className="category-container">
            category-container</div> */}
          <div className="developers-container">
            <div> 
              <img className="personal-link-photo"
                src="https://www.tourcollierville.com/wp-content/uploads/2021/02/Empty-Headshot.jpg" />
                <br/>
                Victor Cheng
                <br/>
              <a href="https://www.linkedin.com/in/victorcheng3/" target="_blank" rel="noopener noreferrer"><img className="personal-link"
                src="https://i.postimg.cc/jjHFWSqP/thin-white-linkedin.png" /></a>
              <a href="https://github.com/vstoic" target="_blank" rel="noopener noreferrer"><img className="personal-link"
                src="https://i.postimg.cc/BbLbgyV5/github-white.png" /></a>
            </div>
            <div> 
              <img className="personal-link-photo"
                src="https://www.tourcollierville.com/wp-content/uploads/2021/02/Empty-Headshot.jpg" />
              <br />
              Tara Oliver 
              <br />
              <a href="https://www.linkedin.com/in/victorcheng3/" target="_blank" rel="noopener noreferrer"><img className="personal-link"
                src="https://i.postimg.cc/jjHFWSqP/thin-white-linkedin.png" /></a>
              <a href="https://github.com/vstoic" target="_blank" rel="noopener noreferrer"><img className="personal-link"
                src="https://i.postimg.cc/BbLbgyV5/github-white.png" /></a>
            </div>
            <div> 
              <img className="personal-link-photo"
                src="https://www.tourcollierville.com/wp-content/uploads/2021/02/Empty-Headshot.jpg" />
              <br />
              Mohammad Rizwan
              <br />
              <a href="https://www.linkedin.com/in/victorcheng3/" target="_blank" rel="noopener noreferrer"><img className="personal-link"
                src="https://i.postimg.cc/jjHFWSqP/thin-white-linkedin.png" /></a>
              <a href="https://github.com/vstoic" target="_blank" rel="noopener noreferrer"><img className="personal-link"
                src="https://i.postimg.cc/BbLbgyV5/github-white.png" /></a>
            </div>
            <div>
              <img className="personal-link-photo"
                src="https://www.tourcollierville.com/wp-content/uploads/2021/02/Empty-Headshot.jpg" />
              <br />
              Tom Léger
              <br />
              <a href="https://www.linkedin.com/in/victorcheng3/" target="_blank" rel="noopener noreferrer"><img className="personal-link"
                src="https://i.postimg.cc/jjHFWSqP/thin-white-linkedin.png" /></a>
              <a href="https://github.com/vstoic" target="_blank" rel="noopener noreferrer"><img className="personal-link"
                src="https://i.postimg.cc/BbLbgyV5/github-white.png" /></a>
            </div>

            </div>
        </div>
        <div className="main-crawl-container">
          <div className="crawl-container">
            {
              this.props.crawls.map(crawl => (
                <MainPageItem
                key={crawl.id}
                crawl={crawl}
                title={crawl.title}
                time={crawl.time}
                distance={crawl.distance}
                cost={crawl.cost}
                venues={crawl.venues}
                venueReducer={this.props.venueReducer}
                fetchAllVenues={this.props.fetchAllVenues}
                />
              ))
            }
          </div>
        </div>
      </div>
    );
  }
}

export default MainPage;
