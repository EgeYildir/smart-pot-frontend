import { create } from 'apisauce'
import authStorage from '../auth/storage'

//Create a client. BaseURL should be server URL (or http://localhost for development).
const apiClient = create({
    baseURL: 'http://localhost:80'
});

apiClient.addAsyncRequestTransform(async (request) => {
    const authToken = await authStorage.getToken();
    if(!authToken) return;
    request.headers["x-auth-token"] = authToken;
});

export default apiClient;