import React from 'react';
import { Link } from 'react-router-dom';


const VenueIndexItem = ({ item }) => {
    return (
        <li>
            <Link to={`/venueShow/${item._id}`}>{item.name}</Link>
        </li>
    )
}

export default VenueIndexItem;




