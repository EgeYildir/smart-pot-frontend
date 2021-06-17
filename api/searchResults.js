import client from './client'

const endpoint = '/search/find';
const pageSize = 5;

const getSearchResults = ( query, pageNumber ) => client.get(endpoint + "?query=" + query + "&pageSize=" + pageSize + "&pageNumber=" + pageNumber);

export default {
    getSearchResults,
}