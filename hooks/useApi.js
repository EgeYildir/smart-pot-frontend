import { useState } from 'react'

//Custom hook for data operations.
export default function useApi(apiFunc){
    const [data, setData] = useState(null);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const request = async (...args) => {
        //Set loading screen till you get response.
        setLoading(true);
        const response = await apiFunc(...args);
        setLoading(false);

        setError(!response?.ok);
        setData(response?.data);
        
        return response;
    };

    return { data, error, loading, request };
};