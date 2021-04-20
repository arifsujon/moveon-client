import React from 'react';
import Sidebar from '../Sidebar/Sidebar';

const Admin = () => {
    return (
        <div className="container">
            <div className="row" style={{height: '100vh'}}>
                <div className="col-md-3">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-9"></div>
            </div>
        </div>
    );
};

export default Admin;