import { useEffect, useState } from "react"

const useAllFoods = () => {
    const [allFood, setAllFood] = useState([]);

    useEffect(() => {
        fetch('allFood.json')
            .then(res => res.json())
            .then(data => setAllFood(data))
    }, []);

    return {
        allFood,
        setAllFood
    }
}

export default useAllFoods;