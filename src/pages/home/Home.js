import React from 'react';
import Navbar from './sections/navbar/Navbar';
import Carousel from './sections/carousel/Carousel';
import Qouet from './sections/qouet/Qouet';
import Shop from './sections/shop/Shop';
import Footer from './sections/footer/Footer';
import Contact from './sections/contact/Contact';
import Subscribe from './sections/subscribe/Subscribe';
import Services from './sections/services/Services';



const Home = () => {

    return (
        <React.Fragment>
            <Navbar />
            <Carousel />
            <Qouet />
            <Shop />
            <Services />
            <Subscribe />
            <Contact />
            <Footer />
        </React.Fragment>
    )
}

export default Home;
