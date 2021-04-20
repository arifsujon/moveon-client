import React from 'react';
import './HeaderMain.css';

const HeaderMain = () => {
    return (
        <div className="container">
            <div className="row d-flex align-items-center header-main-container">
                <div className="offset-md-1 col-md-4 banner-info">
                    <h4>For Rent 70 $ Per Day</h4>
                    <h1>Reserved Now & <br/> Get <i>50% Off</i></h1>
                    <a className="btn btn-primary" href="#services">Go For Reserved</a>
                </div>
            </div>
        </div>
    );
};

export default HeaderMain;