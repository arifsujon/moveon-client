import React from 'react';
import './TestimonialSingle.css';

const TestimonialSingle = ({compliment}) => {
    console.log(compliment);
    const {imageURL, review, name, designation} = compliment;
    return (
        <div className="col-md-4" id="testimonial">
            <div className="testimonial-single p-4 text-white rounded">
                <p>{review}</p>
                <div className="customer-info d-flex mt-5">
                    <div className="customer-img">
                        <img className="rounded-circle" style={{width: '60px'}} src={imageURL} alt=""/>
                    </div>
                    <div className="customer-detail ms-4">
                        <h5>{name}</h5>
                        <h6>{designation}</h6>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialSingle;