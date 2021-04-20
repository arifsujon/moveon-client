import React from 'react';

const TripCard = ({trip}) => {
    console.log(trip);
    const {fare, title, imageURL, userName} = trip;
    return (
        <div className="col-md-3 text-center">
            <img src={imageURL} alt="" style={{height: '60px'}}/>
            <h5>{title}</h5>
            <p className="mb-0">${fare}</p>
            <h6>Hired by: {userName}</h6>
        </div>
    );
};

export default TripCard;