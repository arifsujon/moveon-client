import { faFacebookF, faLinkedinIn, faSkype, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="">
            <div className="footer-top-area">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="single-footer">
                                <div className="footer-logo">
                                    <h3>
                                        <a href="#">MOVEON</a>
                                    </h3>
                                </div>
                                <p>sed do eiusmod tempor incididunt ut labore et dolore magna as aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                                
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="single-footer">
                                <div className="footer-address" id="contact">
                                    <h3>Head Office</h3>
                                    <p className="m-0">125 Big fella St. Road, <span> New York, Hi 5654775</span></p>
                                    <ul>
                                        <li>Phone: 326487652</li>
                                        <li>Email: example@mail.com</li>
                                        <li>Office Time: 9AM- 4PM</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="single-footer quick_links">
                                <h3>Quick Links</h3>
                                <ul className="quick-links">
                                    <li><a href="#about">About Us</a></li>
                                    <li><a href="#services">Our Service</a></li>
                                    <li><a href="#testimonial">Testimonial</a></li>
                                    
                                </ul>
                                <ul className="quick-links">
                                    <li><a href="#about">About Us</a></li>
                                    <li><a href="#services">Our Service</a></li>
                                    <li><a href="#testimonial">Testimonial</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="footer-bottom-area mb-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="copyright">
                                <p>Copyright {(new Date()).getFullYear()} All rights Reserved</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="footer-social">
                                <ul className="">
                                    <li><a href="#"><FontAwesomeIcon icon={faFacebookF} /></a></li>
                                    <li><a href="#"><FontAwesomeIcon icon={faTwitter} /></a></li>
                                    <li><a href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a></li>
                                    <li><a href="#"><FontAwesomeIcon icon={faSkype} /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;