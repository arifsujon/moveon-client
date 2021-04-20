import { Button } from 'react-bootstrap';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../../../App';

const CheckOut = () => {
    const {serviceId} = useParams();
    console.log(serviceId);
    const [services, setServices] = useState([]);
    console.log(services);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect( () => {
        const url = `https://sleepy-forest-90646.herokuapp.com/services`
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setServices(data.find(service => service._id === serviceId))
        })
    }, [serviceId])

    

    const handleCheckOut = () => {
        const newHire = {...services, ...loggedInUser};
        // console.log(newOrder);
        fetch('https://sleepy-forest-90646.herokuapp.com/hire', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(newHire)
        })
        .then(res=> res.json())
        .then( data => {
            console.log('data from database', data)
        })
    }

    return (
        <div>
            <h1>Check Out</h1>
            <table className="table">
                <tbody>
                    <tr>
                        <th>Product Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                
                    <tr>
                        <td>{services.title}</td>
                        <td>1</td>
                        <td>{services.value}</td>
                    </tr>
                </tbody>
            </table>

            <Button onClick={handleCheckOut} className="check-btn" variant="success">Check Out</Button>
        </div>
    );
};

export default CheckOut;