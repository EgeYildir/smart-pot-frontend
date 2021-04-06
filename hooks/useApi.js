import { useState } from 'react'

//Custom hook for data operations.
export default function useApi(apiFunc){
    const [data, setData] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const request = async (...args) => {
        //Set loading screen till you get response.
        setLoading(true);
        const response = await apiFunc(...args);
        setLoading(false);

        //If response is not ok, show error.
        setError(!response.ok);
        setData(response.data);
        
        return response;
    };

    return { data, error, loading, request };
};