import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../assets/stylesheets/crawl_index.css";

class CrawlIndex extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchAllCrawls();
  }
  render() {
    // this.props.fetchAllVenues()
    if (this.props.crawlsReducer?.allIds?.length > 0) {
      console.log("PropsCrawls======>", this.props.crawlsReducer);
    }

    return (
      <div>
        {(this.props.crawlsReducer.allIds || []).map((item) => (
          <div>
            {" "}
            <Link to={`/crawl/${item._id}`}>{item.title} </Link>
          </div>
        ))}
      </div>
    );
  }
}

export default CrawlIndex;
