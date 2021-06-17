import { create } from 'apisauce'
import authStorage from '../auth/storage'

//Create a client. BaseURL should be server URL (or http://localhost for development).
const apiClient = create({
    baseURL: 'http://192.168.1.4:80'
});

apiClient.addAsyncRequestTransform(async (request) => {
    request.headers = {};
    const authToken = await authStorage.getToken();
    if(!authToken) return;
    request.headers["x-auth-token"] = authToken;
    console.log(request);
});

export default apiClient;