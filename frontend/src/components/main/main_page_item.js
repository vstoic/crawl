import React from "react";
import { Link } from 'react-router-dom'
import { fetchAllVenues } from "../../util/venue_api_util";
import "../../assets/stylesheets/main.css";


class MainPageItem extends React.Component  {
//    componentDidMount(){
//     this.props.fetchAllVenues()
//    }
   
   render(){
        const { crawl, venueReducer, title, time, distance, crawlVenues, cost, votecount, description } = this.props;
    //    const crawlVenues = venues.split(", ");
    //    const renderName = (id) => {
    //     //    console.log("victorsData(renderName before)========>", this.props);
    //        let text = this.props.venueReducer[id];
    //        return text;
    //    };
        return(
            
            <div className="each-crawl-container">
                    <Link to={`/crawl/${crawl._id}`}>{title}</Link>
                <div className="each-crawl">
                    <div className="each-desc">
                        {/* <Link to={`/crawl/${item._id}`}>{item.title} </Link> */}
                        <div className="each-sub-desc">
                            <p>Upvotes: {votecount}</p>
                            <p>Cost: {cost}</p>
                            <p>Avg Time: {time}</p>
                            <p>Avg Distance: {distance}</p>
                        </div>
                        <p>Info: {description}</p>
                    </div>
                    {/* <h2>Website</h2> */}
                    <div className="crawl-venue-container">
                        <div>
                         {crawlVenues?.map((item) => (
                            <div key={item} className="each-crawl-venue-details">
                                {(this.props.venueReducer[item])? 
                                  <li key={item}><Link key={item} to={`/venueShow/${item}`}>{this.props.venueReducer[item].name}</Link></li> : null
                                }
                                {/* <div className="mp-image-container">
                                    <img src={renderImageSrc(item)} className="main-page-images" />
                                </div> */}
                            </div>
                        ))}
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default MainPageItem;