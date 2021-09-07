import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';

// function FetchData(page, id) {
//     const [data, setData] = useState(null);

//     fetch(`http://localhost:1337/${page}/${id}`)
//           .then((response) => response.json())
//           .then(setData);
//     return data
// }

// async function FetchThatData(page, id) {
//     const response = await fetch(`http://localhost:1337/${page}/${id}`);
//     const data = await response.json();
//     return data;
// }

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

    return { error, isLoaded, data}
}


export default useApi