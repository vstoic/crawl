import React from "react";
import { Link } from 'react-router-dom'
import { fetchAllVenues } from "../../util/venue_api_util";
import "../../assets/stylesheets/main.css";


class MainPageItem extends React.Component  {
   componentDidMount(){
    this.props.fetchAllVenues()
   }
   
   render(){
    // debugger
        const { crawl, venueReducer, title, time, distance, venues, cost } = this.props;
    //    const crawlVenues = venues.split(", ");
       const renderName = (id) => {
           // console.log("Data(renderName before)========>", props.venueReducer?.venues);
           let text = venueReducer?.venues?.find((x) => x._id == id)?.name;
           return text;
       };
       

       const renderImageSrc = (id) => {
           let img = venueReducer?.venues?.find((x) => x._id == id)?.image;
           return img;
       };

        return(
            <div className="each-crawl">
                <div className="each-desc">
                    <Link to={`/crawl/${crawl._id}`}>{title}</Link>
                    {/* <Link to={`/crawl/${item._id}`}>{item.title} </Link> */}
                    <div className="each-sub-desc">
                        <p>{cost}</p>
                        <p>{time}</p>
                        <p>{distance}</p>
                    </div>
                </div>
                {/* <h2>Website</h2> */}
                <div className="crawl-venue-container">
                    <div>
                    {venues?.map((item) => (
                        <div className="each-crawl-venue-details">
                            <li><Link to={`/venueShow/${item}`}>{renderName(item)}</Link></li>
                            <div className="mp-image-container">
                                {/* <img src={renderImageSrc(item)} className="main-page-images" /> */}
                            </div>
                        </div>
                    ))} 
                    </div>
                </div>
                
            </div>
        )
    }
}

export default MainPageItem;