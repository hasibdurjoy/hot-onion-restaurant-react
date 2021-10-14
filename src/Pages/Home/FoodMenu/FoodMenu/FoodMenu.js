import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Dinners from '../../Dinners/Dinners';
import Lunches from '../../Lunches/Lunches';
import Breakfasts from '../Breakfasts/Breakfasts';
import './FoodMenu.css';


const FoodMenu = () => {
    const activeStyle = {
        fontWeight: "bold",
        color: "red"
    };

    return (
        <div className="text-dark food-menu">
            <NavLink
                to="/home/breakfast"
                activeStyle={activeStyle}
            >
                Breakfast
            </NavLink>
            <NavLink
                to="/home/lunch"
                activeStyle={activeStyle}
            >
                Lunch
            </NavLink>
            <NavLink
                to="/home/dinner"
                activeStyle={activeStyle}
            >
                Dinner
            </NavLink>
            <Breakfasts></Breakfasts>
            <Lunches></Lunches>
            <Dinners></Dinners>
        </div>
    );
};

export default FoodMenu;