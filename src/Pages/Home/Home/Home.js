import React from 'react';
import Banner from '../Banner/Banner';
import FoodMenu from '../FoodMenu/FoodMenu';
import Services from '../Services/Services';
import Shipping from '../Shipping/Shipping';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FoodMenu></FoodMenu>
            <Services></Services>
            <Shipping></Shipping>
        </div >
    );
};

export default Home;