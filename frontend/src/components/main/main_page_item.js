import React from "react";
import { Link } from 'react-router-dom'
import { fetchAllVenues } from "../../util/venue_api_util";


class MainPageItem extends React.Component  {
   componentDidMount(){
    this.props.fetchAllVenues()
   }
   
   render(){
    // debugger
        const {  venueReducer, title, time, distance, venues, cost } = this.props;
       const crawlVenues = venues[0].split(", ");
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
            <li>
                <h4>{title}</h4>
                <p>{time}</p>
                <p>{distance}</p>
                <p>{cost}</p>
                {/* <h2>Website</h2> */}
                <div className="crawl-venue-container">
                    <ul>
                    {crawlVenues?.map((item) => (
                        <>
                        <li><Link to={`/venueShow/${item}`}>{renderName(item)}</Link></li>
                        <div className="mp-image-container">
                            <img src={renderImageSrc(item)} className="main-page-image" />
                        </div>
                        </>
                    ))} 
                    </ul>
                </div>
                
            </li>
        )
    }
}

export default MainPageItem;