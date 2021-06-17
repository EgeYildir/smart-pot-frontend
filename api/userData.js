import client from './client'

const endpoint = '/user/single/';
const updateEndpoint = "/user/update"

const getUserData = ( id ) => client.get(endpoint + id);

const updateUserData = ( userInfo ) => client.post(updateEndpoint, userInfo);

export default {
    getUserData,
    updateUserData,
}