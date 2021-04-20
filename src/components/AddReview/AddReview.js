import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import Sidebar from '../Admin/Sidebar/Sidebar';
import './AddReview.css';

const AddReview = () => {
    const { register, handleSubmit } = useForm();
    const [imageURL, setImageURL] = useState(null);

    const onSubmit = data => {
        console.log(data);
        const reviewData = {
            review: data.review,
            imageURL: imageURL,
            name: data.name,
            designation: data.designation
        };
        

        const url = 'https://sleepy-forest-90646.herokuapp.com/AddReview';
        console.log(reviewData)
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviewData)
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
                <div className="col-md-9 text-center add-review">
                    <h3 className="mt-5">Add Review</h3>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input className="mt-5 p-2 rounded" placeholder="Your Compliment" {...register("review")} /><br/>
                        <input className="mt-3 p-2 rounded" placeholder="Your Name" {...register("name")} /><br/>
                        <input className="mt-3 p-2 rounded" placeholder=" Designation, Company's Name" {...register("designation")} /><br/>
                        <input className="mt-3" type="file" onChange={handleImageUpload}/> <br/>
                        <input className="mt-3 p-2 rounded btn btn-info" type="submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddReview;