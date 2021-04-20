import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ServiceCard.css';

const ServiceCard = ({service}) => {
    // console.log(service);
    const {imageURL, title, fare, summary, _id} = service;
    return (
        <div className="col-md-3 service-card">
            <div className="card mb-4" style={{height: '400px'}}>
                <img className="card-img-top mx-auto d-block rounded mt-3" style={{height: '100px', width: '100px', color: "white"}} src={imageURL} alt="" />
                <div className="card-body">
                    <h5 className="card-title text-center">{title}</h5>
                    <h4 className="card-text text-center">${fare}</h4>
                    <p className="">{summary}</p>
                    <Button className="buy-btn" as={Link} to={'/service/'+_id} variant="success">Book Now</Button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;