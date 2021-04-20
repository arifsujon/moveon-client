import React, { useEffect, useState } from 'react';
import ManageServiceCard from '../ManageServiceCard.js/ManageServiceCard';
import Sidebar from '../Sidebar/Sidebar';

const ManageService = () => {
    const [services, setServices] = useState([])
    console.log(services);
    useEffect(() => {
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-9">
                    <h3 className="mt-5 mb-5">Manage Service</h3>
                    {
                        services.map(service => <ManageServiceCard service={service} key={service._id}></ManageServiceCard>)
                    }
                </div>
            </div>
        </div>
        
    );
};

export default ManageService;