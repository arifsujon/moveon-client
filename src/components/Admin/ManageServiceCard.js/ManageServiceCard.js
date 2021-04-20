import React from 'react';

const ManageServiceCard = ({service}) => {
    console.log(service);

    const handleDelete = (id)=>{
        fetch(`http://localhost:5000/deleteService/${id}`, {
                method: 'DELETE'
            })
            .then(result => {
                console.log("deleted successfully", result);
            })
    }

    return (
        <div className="col-md-3">
            <img src={{}} alt=""/>
            <h3>{service.title}</h3>
            <p>{service.info}</p>
            <button  className="ml-5 mb-3" onClick={() => handleDelete(service._id)}><span className="">Delete</span></button>
        </div>
    );
};

export default ManageServiceCard;