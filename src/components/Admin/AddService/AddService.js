import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import Sidebar from '../Sidebar/Sidebar';

const AddService = () => {
    const { register, handleSubmit } = useForm();
    const [imageURL, setImageURL] = useState(null);

    const onSubmit = data => {
        console.log(data);
        const serviceData = {
            title: data.title,
            fare: data.fare,
            summary: data.summary,
            imageURL: imageURL
        };
        

        const url = 'http://localhost:5000/addService';
        console.log(serviceData)
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(serviceData)
        })
        .then( res => console.log('server side response', res))

    };
    
    const handleImageUpload = event => {
        console.log(event.target.files[0]);
        const imageData = new FormData();
        imageData.set('key', '567ed280f2234c502b55f6ed8195bb1f');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', 
        imageData)
        .then(function (response) {
        setImageURL(response.data.data.display_url);
        })
        .catch(function (error) {
        console.log(error);
        });
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-9 text-center add-products">
                    <h3>Add Service</h3>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input className="mt-5 p-2 rounded" placeholder="Service Title" {...register("title")} /><br/>
                        <input className="mt-3 p-2 rounded" placeholder="Service Fare" {...register("fare")} /><br/>
                        <input className="mt-3 p-2 rounded" placeholder="Service summary" {...register("summary")} /><br/>
                        <input className="mt-3" type="file" onChange={handleImageUpload}/> <br/>
                        <input className="mt-3 p-2 rounded" type="submit" />
                    </form>
                </div>
            </div>
        </div>
       
    );
};

export default AddService;