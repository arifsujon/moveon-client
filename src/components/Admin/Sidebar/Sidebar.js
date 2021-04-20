import React from 'react';
import {  Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faGripHorizontal, faCommentAlt, faCartPlus, faShoppingBag, faUser } from '@fortawesome/free-solid-svg-icons';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className="sidebar" style={{ height: '100vh', maxWidth: '100%' }}>
            <ul className="">
                <li>
                    <Link to="/home" className="text-white">
                        <FontAwesomeIcon icon={faHome} /> <span>Home</span>
                    </Link>
                </li>
                <li>
                    <Link to="/dashboard" className="text-white">
                        <FontAwesomeIcon icon={faGripHorizontal} /> <span>Dashboard</span>
                    </Link>
                </li>
                <li>
                    <Link to="/addService" className="text-white">
                        <FontAwesomeIcon icon={faUser} /> <span>Add Service</span>
                    </Link>
                </li>
                <li>
                    <Link to="/manageService" className="text-white">
                        <FontAwesomeIcon icon={faCartPlus} /> <span>Manage Service</span>
                    </Link>
                </li>
                <li>
                    <Link to="/tripList" className="text-white">
                        <FontAwesomeIcon icon={faShoppingBag} /> <span>Trip List</span>
                    </Link>
                </li>
                <li>
                    <Link to="/addReview" className="text-white">
                        <FontAwesomeIcon icon={faCommentAlt} /> <span>Add Review</span>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;