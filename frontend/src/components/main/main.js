// src/components/main/main_page.js

import React from "react";
import "../../assets/stylesheets/main.css";
import CrawlShow from "../crawls/crawl_show";
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
          <div className="category-container">
            category-container</div>
          <div className="developers-container">
            developers-container</div>
        </div>
        <div className="main-crawl-container">
          <div className="crawl-container">
             <ul>
                {
                  this.props.crawls.map(crawl => (
                    <MainPageItem
                    key={crawl.id}
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
             </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default MainPage;
