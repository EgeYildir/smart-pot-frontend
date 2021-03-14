import client from './client'

const endpoint = '';

const getNotifications = () => client.get(endPoint);

export default {
    getNotifications,
}