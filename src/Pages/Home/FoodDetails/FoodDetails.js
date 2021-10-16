import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import useCart from '../../../Hooks/useCart';
import { addToDb } from '../../../utilities/fakeDb';
import Cart from '../Cart/Cart';

const FoodDetails = () => {
    const { foodID } = useParams();

    const [allFood, setAllFood] = useState([]);
    const [singleFood, setSingleFood] = useState([]);
    const [cart, setCart] = useCart(allFood);

    const { id, name, description, img, price } = singleFood;

    useEffect(() => {
        fetch("https://raw.githubusercontent.com/hasibdurjoy/hot-onion-restaurant-react/main/public/allFood.json")
            .then(res => res.json())
            .then(data => {
                setAllFood(data)
                setSingleFood(data.find(food => food.id === foodID))
            })
    }, []);

    const [count, setCount] = useState(1);
    const increaseItem = () => {
        setCount(count + 1);
    }
    const decreaseItem = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    }


    const handleAddToCart = (food) => {
        const exists = cart.find(pd => pd.key === food.id);
        let newCart = [];
        if (exists) {
            const rest = cart.filter(pd => pd.key !== food.id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, food];
        }
        else {
            food.quantity = count;
            newCart = [...cart, food];
        }
        setCart(newCart);
        // save to local storage (for now)
        addToDb(food.id);
    }
    /* const history = useHistory();
    const handleAddToCart = () => {
        history.push('/cart');
    } */
    return (
        <div className=" py-5">
            <div className="row gap-5 mx-5">
                <div className="col-md-8 card border-0 shadow py-4 ">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-12 ps-4">
                            <h1>{name}</h1>
                            <p>{description}</p>
                            <div className="d-flex gap-4">
                                <h2>${(price * count).toFixed(2)}</h2>
                                <div className="border-dark btn rounded-pill text-bold d-flex">
                                    <button className="btn btn-light  rounded-circle" onClick={decreaseItem}><i className="fas fa-minus-circle fs-3"></i></button>
                                    <h3>{count}</h3>
                                    <button className="btn btn-light rounded-circle" onClick={increaseItem}><i className="fas fa-plus-circle fs-3"></i></button>
                                </div>
                            </div>
                            <button onClick={() => handleAddToCart(singleFood)} className="btn-danger btn rounded-pill mt-4"><i className="fas fa-shopping-cart"></i> Add to cart</button>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                            <img src={img} alt="" className="img-fluid" />
                        </div>
                    </div>
                </div>
                <div className="col-md-3 card border-0 shadow d-flex justify-content-center">
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default FoodDetails;