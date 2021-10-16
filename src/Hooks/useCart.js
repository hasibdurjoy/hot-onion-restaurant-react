import { useState, useEffect } from 'react';
import { getStoredCart } from '../utilities/fakeDb';

const useCart = allFood => {
    const [cart, setCart] = useState([]);
    console.log(allFood);
    useEffect(() => {

        if (allFood) {
            const savedCart = getStoredCart();
            const storedCart = [];
            for (const key in savedCart) {
                const addedFood = allFood.find(food => food.key === key);
                if (addedFood) {
                    // set quantity
                    const quantity = savedCart[key];
                    addedFood.quantity = quantity;
                    storedCart.push(addedFood);
                }
            }
            setCart(storedCart);
        }

    }, [allFood]);

    return [cart, setCart];
}

export default useCart;