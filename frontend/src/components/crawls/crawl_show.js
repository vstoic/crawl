import React, { useEffect } from "react";
import "../../assets/stylesheets/crawl_show.css";
import { Link } from "react-router-dom";

function CrawlShow(props) {
  useEffect(() => {
    props.fetchAllVenues();
    props.fetchCrawl(props.match.params.id);
  }, []);

  const crawlTitle = props.crawlsReducer?.byId?.data?.title;
  const crawlCategory = props.crawlsReducer?.byId?.data?.category;
  const crawlDescription = props.crawlsReducer?.byId?.data?.description;
  const crawlCost = props.crawlsReducer?.byId?.data?.cost;
  const crawlTime = props.crawlsReducer?.byId?.data?.time;
  const crawlVenues = props.crawlsReducer?.byId?.data?.venues[0].split(", ");
  const crawlVotes = props.crawlsReducer?.byId?.data?.votecount;
  //   const { title, category, description, time } =
  //     props.crawlsReducer?.byId?.data;
  
  const renderName = (id) => {
    // console.log("Data(renderName before)========>", props.venueReducer?.venues);
    let text = props.venueReducer?.venues?.find((x) => x._id == id)?.name;
    return text;
  };
  const renderImageSrc = (id) => {
    let text = props.venueReducer?.venues?.find((x) => x._id == id)?.image;
    return text;
  };
  const renderCost = (id) => {
    let text = props.venueReducer?.venues?.find((x) => x._id == id)?.cost;
    return text;
  };
  const renderDescription = (id) => {
    let text = props.venueReducer?.venues?.find((x) => x._id == id)?.description;
    return text;
  };
  console.log(
    "DataCrawls======>",
    props.crawlsReducer?.byId?.data?.venues[0].split(", ")
  );
  
  return (
    <div className="main-crawl-show-container">
      <div className="crawl-show-left">
        <div className="data-container">
          <div className="crawl-votes"> {crawlVotes}</div>
          <div className="crawl-title">{crawlTitle}</div>
          <div className="crawl-details-important">
            <div className="crawl-cost">{crawlCost}</div>
            <div className="crawl-category">{crawlCategory}</div>
            <div className="crawl-time">Duration: {crawlTime}</div>
          </div>
          
          <div className="crawl-description">{crawlDescription}</div>
          
          <div className="crawls-venues-container">
            {crawlVenues?.map((item) => (
              <div className="each-crawl">
                <div className="">
                  <Link to={`/venueShow/${item}`}>{renderName(item)}</Link>
                  <div>{renderCost(item)}</div>
                  <div>-{renderDescription(item)}</div>
                </div>
                <img className="crawl-venue-image" src={renderImageSrc(item)}/>
              </div>
            ))}
          </div>

        </div>
      </div>

      <div className="crawl-show-right">
        <div className="crawl-show-map-container">
              <div className="crawl-show-map">map</div>
        </div>

        <div className="crawl-comments-container">
          <p>comments-container</p>
        </div>
      </div>      
    </div>
  );
}

export default CrawlShow;
