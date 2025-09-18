import { useState, useEffect } from "react";

const useFetch = (url, initialData) => {
    const [data, setData] = useState(initialData)
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        fetch(url)
        .then((res) => res.json())
        .then((data) => {
            // console.log(data) 
            setData(data)
        })
        .catch((error) => setError(error.message))
        .finally(() => setLoading(false));
    }, [url])
    return { data, loading, error }
} 

export default useFetch

