import { useEffect, useState } from "react"

const useAllFoods = () => {
    const [allFood, setAllFood] = useState([]);

    useEffect(() => {
        fetch("https://raw.githubusercontent.com/hasibdurjoy/hot-onion-restaurant-react/main/public/allFood.json")
            .then(res => res.json())
            .then(data => setAllFood(data))
    }, []);

    return {
        allFood,
        setAllFood
    }
}

export default useAllFoods;