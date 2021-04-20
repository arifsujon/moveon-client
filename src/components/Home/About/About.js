import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import aboutCar from '../../../images/about.png';
import './About.css';

const About = () => {
    return (
        <div className="container mt-5 pt-5" id="about">
            <div className="row">
                <div className="col-md-6 about-content">
                    <h5>About Us</h5>
                    <h2 className="mb-4">Welcome To MoveOn</h2>
                    <p>Lorem Ipsum passages, and more recently with desktop publishing software like aldus pageMaker including versions of all the Rorem Ipsum generators</p>
                    
                    <div className="about-list">
                        <ul>
                            <li><p className=""><FontAwesomeIcon icon={faCheckSquare} /> We are a trusted name</p></li>
                            <li><p className=""><FontAwesomeIcon icon={faCheckSquare} /> we deal in have all brands</p></li>
                            <li><p className=""><FontAwesomeIcon icon={faCheckSquare} /> have a larger stock of vehicles</p></li>
                            <li><p className=""><FontAwesomeIcon icon={faCheckSquare} /> we are at worldwide locations</p></li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-6">
                    <img className="img-fluid" src={aboutCar} alt="" />
                </div>
            </div>
        </div>
    );
};

export default About;