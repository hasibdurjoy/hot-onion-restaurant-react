import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Header from '../../Shared/Header/Header';

const FoodDetails = () => {
    const { foodID } = useParams();

    const [allFood, setAllFood] = useState([]);
    useEffect(() => {
        fetch("allFood.json")
            .then(res => res.json())
            .then(data => setAllFood(data))
    }, [Header]);
    console.log('allFood');
    console.log(allFood);
    return (
        <div className="text-center p-5">
            <h1>{foodID}</h1>
        </div>
    );
};

export default FoodDetails;