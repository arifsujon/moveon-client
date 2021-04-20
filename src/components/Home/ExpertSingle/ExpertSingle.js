import React from 'react';
import './ExpertSingle.css'

const ExpertSingle = ({expert}) => {
    return (
        <div className="col-md-3 about-single-card">
            <div className="card" style={{}}>
            <img className="card-img-top img-fluid" src={expert.imageURL} alt=""/>
                <div className="card-body text-center">
                    <h5 className="card-title">{expert.name}</h5>
                    <p className="card-text">{expert.experience}</p>
                </div>
            </div>
        </div>
    );
};

export default ExpertSingle;