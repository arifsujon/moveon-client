import React from 'react';

const TripCard = ({trip}) => {
    console.log(trip);
    return (
        <div className="col-md-3">
            <img src={{}} alt=""/>
            <h5>{trip.title}</h5>
            <p>{trip.info}</p>
        </div>
    );
};

export default TripCard;