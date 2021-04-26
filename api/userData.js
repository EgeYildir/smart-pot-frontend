import client from './client'

const endpoint = '/user/single/';

const getUserData = ( id ) => client.get(endpoint + id);

export default {
    getUserData,
}