import { useEffect, useState } from "react"

const useLunches = () => {
    const [lunches, setLunches] = useState([]);
    useEffect(() => {
        fetch('lunch.json')
            .then(res => res.json())
            .then(data => setLunches(data))
    }, []);

    return {
        lunches,
        setLunches
    }
}

export default useLunches;