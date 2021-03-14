import client from './client'

const endpoint = '';

const getSearchResults = () => client.get(endpoint);

export default {
    getSearchResults,
}