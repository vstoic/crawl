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
    console.log("Data(renderName before)========>", props.venueReducer?.venues);
    let text = props.venueReducer?.venues?.find((x) => x._id == id)?.name;
    return text;
    // console.log("Data========>", text);
  };
  const renderImageSrc = (id) => {
    let text = props.venueReducer?.venues?.find((x) => x._id == id)?.image;
    return text;
    // console.log("Data========>", text);
  };
  console.log(
    "DataCrawls======>",
    props.crawlsReducer?.byId?.data?.venues[0].split(", ")
  );
  return (
    <>
      <div className="crawl-title">
        <h1>{crawlTitle}</h1>
      </div>
      <div className="crawl-cost">{crawlCost}</div>
      <div className="crawl-description">{crawlDescription}</div>
      <div className="crawl-category">{crawlCategory}</div>
      <div className="crawl-time">Duration: {crawlTime}</div>
      <div className="crawl-venues">
        Venues: <br></br>
        <ul>
          {crawlVenues?.map((item) => (
            <li>
              <Link to={`/venueDetail/${item}`}> {renderName(item)} </Link>
              {renderImageSrc(item)}
            </li>
          ))}
        </ul>
      </div>
      <div className="crawl-votes">Crawl votes: {crawlVotes}</div>
    </>
  );
}

export default CrawlShow;
