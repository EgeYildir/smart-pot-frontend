import * as SecureStore from 'expo-secure-store'
import jwtDecode from 'jwt-decode'
import AsyncStorage from '@react-native-async-storage/async-storage';

const key = "authToken";//TODO: Refactor before deployment.

//TODO: Make it SecureStore before deployment.
//Stores the authentication token in the SecureStore.
const storeToken = async (authToken) => {
    try {
        await AsyncStorage.setItem(key, authToken);
    } catch (error) {
        console.log("Error storing the auth token", error);
    }
}

//Gets the authentication token from SecureStore.
const getToken = async () => {
    try {
        return await AsyncStorage.getItem(key);
    } catch (error) {
        console.log("Error getting the auth token", error);
    }
}

//Decodes the token into user object. 
const getUser = async () => {
    const token = await getToken();
    return (token) ? jwtDecode(token) : null;
}

//Removes token from the SecureStore.
const removeToken = async () => {
    try {
        await AsyncStorage.removeItem(key);
    } catch (error) {
        console.log("Error removing the auth token", error);
    }
}

export default { getUser, getToken, removeToken, storeToken };