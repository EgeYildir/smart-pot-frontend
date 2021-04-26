import client from './client'

const endpoint = '/plantData';

const getPlantData = () => client.get(endpoint);

export default {
    getPlantData,
}