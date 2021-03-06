import { create } from 'apisauce'

//Create a client. BaseURL should be server URL (or http://localhost for development).
const apiClient = create({
    baseURL: 'http://localhost:80'
});

export default apiClient;