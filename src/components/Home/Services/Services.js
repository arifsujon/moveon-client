import React, { useEffect, useState } from 'react';
import ServiceCard from '../ServiceCard/ServiceCard'

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://sleepy-forest-90646.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])
    return (
        <div className="container" id="services">
            <h5 className="text-center mt-5 pt-3">See Our</h5>
            <h2 className="text-center mt-3 mb-5">Latest Services</h2>
            <div className="row">
                {
                    services.map(service => <ServiceCard service={service} key={service._id} ></ServiceCard> )
                }
            </div>
        </div>
    );
};

export default Services;