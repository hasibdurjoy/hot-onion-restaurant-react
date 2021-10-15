import React from 'react';
import Banner from '../Banner/Banner';
import Cart from '../Cart/Cart';
import FoodMenu from '../FoodMenu/FoodMenu';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FoodMenu></FoodMenu>
            <Cart></Cart>
        </div >
    );
};

export default Home;