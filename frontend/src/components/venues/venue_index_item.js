import React from 'react';
import { Link } from 'react-router-dom';


const VenueIndexItem = ({ venue }) => {
    // console.log("test", venue)
    return (
        <div className='each-venue-idx'>
            
            {venue.image? <Link to={`/venueShow/${venue._id}`}><img src={venue.image} className="venue-show-image" /></Link> :
                <Link to={`/venueShow/${venue._id}`}><img src="https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930" className="venue-show-image" /></Link>
            }
            <p><Link to={`/venueShow/${venue._id}`}>{venue.name}</Link></p>
        </div>
    )
}

export default VenueIndexItem;




