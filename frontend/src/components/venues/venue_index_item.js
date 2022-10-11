import React from 'react';
import { Link } from 'react-router-dom';


const VenueIndexItem = ({ venue }) => {
    // console.log("test", venue)
    return (
        <div className='each-venue-idx'>
            
            <Link to={`/venueShow/${venue._id}`}><img src={venue.image} className="venue-show-image" /></Link>
            <p><Link to={`/venueShow/${venue._id}`}>{venue.name}</Link></p>
        </div>
    )
}

export default VenueIndexItem;




