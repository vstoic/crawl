import React, { useEffect } from "react";
import "../../assets/stylesheets/crawl_show.css";

function CrawlShow(props) {
  useEffect(() => {
    props.fetchCrawl("1234");
  }, []);

  const crawlTitle = props.crawlsReducer?.byId?.data?.title;
  const crawlCategory = props.crawlsReducer?.byId?.data?.category;
  const crawlDescription = props.crawlsReducer?.byId?.data?.description;

  const crawlTime = props.crawlsReducer?.byId?.data?.time;
  const crawlVenues = props.crawlsReducer?.byId?.data?.venues;
  //   const { title, category, description, time } =
  //     props.crawlsReducer?.byId?.data;

  console.log("DataCrawls======>", props);
  return (
    <>
      <div>{crawlTitle}</div>
      <div>{crawlDescription}</div>
      <div>{crawlCategory}</div>
      <div>{crawlTime}</div>
      <div>{crawlVenues}</div>
    </>
  );
}

export default CrawlShow;
