import React, { useEffect, useState } from 'react';
import TestimonialSingle from '../TestimonialSingle/TestimonialSingle';
import './Testimonial.css';

const Testimonial = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
        .then(res => res.json())
        .then(data => setReviews(data))
    }, [])
    return (
        <section className="testimonial-container mt-5 mb-5">
            <div className="container">
                <h5 className="text-center">Some Words</h5>
                <h2 className="text-center">Testimonial</h2>
                <div className="row mt-5 mb-3">
                    {
                        reviews.map(review => <TestimonialSingle compliment={review} key={review._id}></TestimonialSingle>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Testimonial;