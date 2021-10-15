import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Header from '../../Shared/Header/Header';

const FoodDetails = () => {
    const { foodID } = useParams();

    const [singleFood, setSingleFood] = useState([]);
    const { id, name, description, img, price } = singleFood;
    useEffect(() => {
        fetch("https://raw.githubusercontent.com/hasibdurjoy/hot-onion-restaurant-react/main/public/allFood.json")
            .then(res => res.json())
            .then(data => setSingleFood(data.find(food => food.id === foodID)))
    }, []);
    console.log(foodID, singleFood);
    const [count, setCount] = useState(1);
    const increaseItem = () => {
        setCount(count + 1);
    }
    const decreaseItem = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    }
    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-lg-6 col-md-6 col-12">
                    <h1>{name}</h1>
                    <p>{description}</p>
                    <div className="d-flex gap-4">
                        <h2>${price}</h2>
                        <div className="btn border-secondary rounded-pill px-2 fs-3"><small className="px-3" onClick={decreaseItem}>-</small> {count} <small className="px-3" onClick={increaseItem}>+</small></div>
                    </div>
                    <button className="btn-danger btn rounded-pill mt-4"><i className="fas fa-shopping-cart"></i> Add to cart</button>
                </div>
                <div className="col-lg-6 col-md-6 col-12">
                    <img src={img} alt="" className="img-fluid px-5" />
                </div>
            </div>
        </div>
    );
};

export default FoodDetails;