import client from './client'

const loginEndpoint = "/auth/login";
const signupEndpoint = "/auth/signup";

//Both authApi (/api/auth.js) and useAuth (/auth/useAuth.js) include login functions. However 
// these two serve different purposes. Login in authApi only posts the email and password. 
//Login in useAuth function stores the user to preserve state.

//Post email and password to the authentication endpoint.
const login = (email, password) => client.post(loginEndpoint, { email, password });

const signup = (userInfo) => client.post(signupEndpoint, userInfo);


export default {
    login,
    signup,
};