import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';
import TripCard from '../TripCard/TripCard';

const TripList = () => {
    const [tripList, setTripList] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(() => {
        fetch('https://sleepy-forest-90646.herokuapp.com/tripList?email='+loggedInUser.email)
        .then(res => res.json())
        .then(data => setTripList(data));
    }, [])
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-9">
                    <div className="row">
                        <h3 className="mt-5 mb-5 text-center">Trip List</h3>
                        {
                            tripList.map(trip => <TripCard trip={trip} key={trip._id}></TripCard>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TripList;