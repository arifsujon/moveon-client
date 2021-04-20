import React from 'react';
import './Experts.css';
import Mike from '../../../images/expert-1.jpg'
import Christoper from '../../../images/expert-2.jpg'
import John from '../../../images/expert-3.jpg'
import Martin from '../../../images/expert-4.jpg'
import ExpertSingle from '../ExpertSingle/ExpertSingle'; 

const experts = [
    {
        name: 'Mike Adams',
        experience: '7 years experience',
        imageURL: Mike
     },
     {
        name: 'Christoper Klan',
        experience: '3 years experience',
        imageURL: Christoper
     },
     {
        name: 'John Doe',
        experience: '4 years experience',
        imageURL: John
     },
     {
        name: 'Martin Thomas',
        experience: '3 years experience',
        imageURL: Martin
     }
]

const Experts = () => {
    return (
        <section className="experts-container mt-5">
            <div className="container">
                <h5 className="text-center">Experts</h5>
                <h2 className="text-center">Our members</h2>
                <div className="row mt-5">
                    {
                        experts.map(expert => <ExpertSingle expert={expert} key={expert.name}></ExpertSingle>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Experts;