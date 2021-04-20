import React from 'react';
import Experts from '../Experts/Experts';
import Footer from '../../Shared/Footer/Footer';
import Header from '../Header/Header';
import Testimonial from '../Testimonial/Testimonial';
import Services from '../Services/Services';
import About from '../About/About';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <About></About>
            <Experts></Experts>
            <Testimonial></Testimonial>
            <Footer></Footer>
        </div>
    );
};

export default Home;