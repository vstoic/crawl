import React, { useEffect } from "react";
import "../../assets/stylesheets/crawl_show.css";


 function CrawlShow(props) {
  useEffect(() => {
    props.fetchCrawl(props.match.params.id);
  }, []);
  const crawlTitle = props.venueReducer?.singleCrawl?.data?.title;
  const crawlDescription = props.venueReducer?.singleCrawl?.data?.Description;

  return (
    <>
    
    </>
  );

}



export default CrawlShow;
