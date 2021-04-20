import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-md navbar-light bg-light fixed-top">
            <div className="container">
                <a href="#" className="navbar-brand" >MOVEON</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link ms-md-5 active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a to="/about" className="nav-link ms-md-5" href="#about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link ms-md-5" href="#services">Service</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link ms-md-5" href="#contact">Contact</a>
                        </li>
                        <li className="nav-item">
                            <Link to="/admin" className="nav-link ms-md-5">Admin</Link>
                        </li>
                        <li className="nav-item">
                        <Link to="/login" className="nav-link ms-md-5">Login</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;