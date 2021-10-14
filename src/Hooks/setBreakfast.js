import { useEffect, useState } from "react"

const useBreakfast = () => {
    const [breakfasts, setBreakfasts] = useState([]);
    useEffect(() => {
        fetch('breakfasts.json')
            .then(res => res.json())
            .then(data => setBreakfasts(data))
    }, []);

    return {
        breakfasts,
        setBreakfasts
    }
}

export default useBreakfast;