import React from 'react';

const ManageServiceCard = ({service}) => {
    console.log(service);

    const handleDelete = (id)=>{
        fetch(`https://sleepy-forest-90646.herokuapp.com/deleteService/${id}`, {
                method: 'DELETE'
            })
            .then(result => {
                console.log("deleted successfully", result);
            })
    }

    return (
        <div className="col-md-3 text-center mb-5">
            <img src={service.imageURL} alt="" style={{height: '60px'}}/>
            <h5 className="my-3">{service.title}</h5>
            <p>{service.info}</p>
            <button  className="ml-5 mb-3 btn btn-danger" onClick={() => handleDelete(service._id)}><span className="">Delete</span></button>
        </div>
    );
};

export default ManageServiceCard;