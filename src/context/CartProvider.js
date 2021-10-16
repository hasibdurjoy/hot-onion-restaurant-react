import React from 'react';
import { createContext } from 'react';
import useCart from '../Hooks/useCart';

export const DataContext = createContext();
const CartProvider = ({ children }) => {
    const cartData = useCart();
    return (
        <DataContext.Provider value={cartData}>
            {children}
        </DataContext.Provider>
    );
};

export default CartProvider;