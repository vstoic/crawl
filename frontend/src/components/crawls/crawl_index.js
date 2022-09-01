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
      // console.log("PropsCrawls======>", this.props.crawlsReducer);
    }

    return (
      <ul>
        {(this.props.crawlsReducer.allIds || []).map((item) => (
          <ul>
            {" "}
            <Link to={`/crawl/${item._id}`}>{item.title} </Link>
          </ul>
        ))}
      </ul>
    );
  }
}

export default CrawlIndex;
