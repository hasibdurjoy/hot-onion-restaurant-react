import React from 'react';
import Banner from '../Banner/Banner';
import FoodMenu from '../FoodMenu/FoodMenu';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FoodMenu></FoodMenu>
            <Services></Services>
        </div >
    );
};

export default Home;