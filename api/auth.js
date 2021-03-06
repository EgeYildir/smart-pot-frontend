import client from './client'

const authEndpoint = "/auth/login";

//Post email and password to the authentication endpoint.
const login = (email, password) => client.post(authEndpoint, { email, password });

export default {
    login,
};