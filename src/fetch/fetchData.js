import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';


const useApi = url => {
    const [data, setData] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = () => {
            axios
                .get(url)
                .then(response => {
                    setIsLoaded(true);
                    setData(response.data);
                })
                .catch(error => {
                    setError(error);
                });
        };
        fetchData();
    }, [url]);

    const obj = {error, isLoaded, data}
    return obj
    //return { error, isLoaded, data}
}


export default useApi