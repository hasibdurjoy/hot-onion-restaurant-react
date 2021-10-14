import React from 'react';
import { NavLink } from 'react-router-dom';
import './FoodMenu.css';


const FoodMenu = () => {
    const activeStyle = {
        fontWeight: "bold",
        color: 'red'
    };

    return (
        <div className="text-dark food-menu m-4 text-center">
            <NavLink
                to="/home-breakfast"
                activeStyle={activeStyle}
            >
                Breakfast
            </NavLink>
            <NavLink
                to="/home-lunch"
                activeStyle={activeStyle}
            >
                Lunch
            </NavLink>
            <NavLink
                to="/home-dinner"
                activeStyle={activeStyle}
            >
                Dinner
            </NavLink>
        </div>
    );
};

export default FoodMenu;