import * as SecureStore from 'expo-secure-store'
import jwtDecode from 'jwt-decode'

const key = "authToken";//TODO: Refactor before deployment.

//Stores the authentication token in the SecureStore.
const storeToken = async (authToken) => {
    try {
        await SecureStore.setItemAsync(key, authToken);
    } catch (error) {
        console.log("Error storing the auth token", error);
    }
}

//Gets the authentication token from SecureStore.
const getToken = async () => {
    try {
        return await SecureStore.getItemAsync(key);
    } catch (error) {
        console.log("Error getting the auth token", error);
    }
}

//Decodes the token into user object. 
const getUser = async () => {
    const token = await getToken();
    return (token) ? jwtDecode (token) : null;
}

//Removes token from the SecureStore.
const removeToken = async () => {
    try {
        await SecureStore.deleteItemAsync(key);
    } catch (error) {
        console.log("Error removing the auth token", error);
    }
}

export default { getUser, removeToken, storeToken };