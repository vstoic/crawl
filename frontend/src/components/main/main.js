// src/components/main/main_page.js
import { Link } from "react-router-dom";
import React from "react";
import "../../assets/stylesheets/main.css";
import MainPageItem from "./main_page_item";


class MainPage extends React.Component {
componentDidMount(){
  this.props.fetchAllVenues();
  this.props.fetchAllCrawls();
  
}

  render() {
 
    if(this.props.crawls){
      this.props.crawls?.sort((a,b) => (b.votecount) - (a.votecount))
    }
    // debugger
    return (
      <div className="main-page-container">
        <div className="main-crawl-container">
          <div className="crawl-container">
            {
              this.props.crawls.map(crawl => (
                <MainPageItem
                key={crawl._id}
                crawl={crawl}
                title={crawl.title}
                time={crawl.time}
                distance={crawl.distance}
                cost={crawl.cost}
                votecount={crawl.votecount}
                description={crawl.description}
                crawlVenues={crawl.venues}
                venueReducer={this.props.venueReducer}
                fetchAllVenues={this.props.fetchAllVenues}
                />
              ))
            }
          </div>
        </div>
        <div className="main-left-container">
          {/* <div className="category-container">
            category-container</div> */}
            <div className="create-buttons-container">
              <Link to={"/crawlCreate/"} className="create-button">
                Create Crawl
              </Link>
              <Link to={"/venueCreate"} className="create-button">
                Create Venue
              </Link>
            </div>
          <div className="developers-container">

          <div className="devs"> 
              <img className="personal-link-photo"
                src="https://i.postimg.cc/PJsW99sN/moh.png" />
              <br />
              Mohammad 
              <br />
              Rizwan
              <br />
              <a href="https://www.linkedin.com/in/mohammad-h-rizwan-a83a31246/" target="_blank" rel="noopener noreferrer"><img className="personal-link"
                src="https://i.postimg.cc/jjHFWSqP/thin-white-linkedin.png" /></a>
              <a href="https://github.com/mrizwan83" target="_blank" rel="noopener noreferrer"><img className="personal-link"
                src="https://i.postimg.cc/BbLbgyV5/github-white.png" /></a>
            </div>
            <div className="devs"> 
              <img className="personal-link-photo"
                src="https://i.postimg.cc/0jsScSDw/Linkedin.jpg" />
                <br/>
                Victor 
                <br />
                Cheng
                <br/>
              <a href="https://www.linkedin.com/in/victorcheng3/" target="_blank" rel="noopener noreferrer"><img className="personal-link"
                src="https://i.postimg.cc/jjHFWSqP/thin-white-linkedin.png" /></a>
              <a href="https://github.com/vstoic" target="_blank" rel="noopener noreferrer"><img className="personal-link"
                src="https://i.postimg.cc/BbLbgyV5/github-white.png" /></a>
            </div>
            <div className="devs"> 
              <img className="personal-link-photo"
                src="https://www.tourcollierville.com/wp-content/uploads/2021/02/Empty-Headshot.jpg" />
              <br />
              Tara 
              <br />
              Oliver 
              <br />
              <a href="https://www.linkedin.com/in/tara-oliver/" target="_blank" rel="noopener noreferrer"><img className="personal-link"
                src="https://i.postimg.cc/jjHFWSqP/thin-white-linkedin.png" /></a>
              <a href="https://github.com/Tara-Oliver" target="_blank" rel="noopener noreferrer"><img className="personal-link"
                src="https://i.postimg.cc/BbLbgyV5/github-white.png" /></a>
            </div>
          
            <div className="devs">
              <img className="personal-link-photo"
                src="https://avatars.githubusercontent.com/u/104274719?v=4" />
              <br />
              Tom
              <br />
              Léger
              <br />
              <a href="https://www.linkedin.com/in/tomleger3000/" target="_blank" rel="noopener noreferrer"><img className="personal-link"
                src="https://i.postimg.cc/jjHFWSqP/thin-white-linkedin.png" /></a>
              <a href="https://github.com/legertom" target="_blank" rel="noopener noreferrer"><img className="personal-link"
                src="https://i.postimg.cc/BbLbgyV5/github-white.png" /></a>
            </div>
            </div>
        </div>
      </div>
    );
  }
}

export default MainPage;
