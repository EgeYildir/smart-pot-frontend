import client from './client'

const endpoint = './user/public';

const getUserData = () => client.get(endpoint);

export default {
    getUserData,
}