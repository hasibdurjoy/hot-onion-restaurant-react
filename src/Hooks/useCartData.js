import { useContext } from 'react';
import { DataContext } from '../context/CartProvider';

const useCartData = () => {
    return useContext(DataContext)
};

export default useCartData;