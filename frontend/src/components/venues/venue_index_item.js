import React from 'react';
import { Link } from 'react-router-dom';


const VenueIndexItem = ({ venue }) => {
    return (
        <div>
        <li>
            <Link to={`/venueShow/${venue._id}`}>{venue.name}</Link>
        </li>
        </div>
    )
}

export default VenueIndexItem;




