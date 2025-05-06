import axios from 'axios';

const API_URL = 'https://rickandmortyapi.com/api/location';

export const getLocations = async () => {
    const response = await axios.get(API_URL);
    return response.data
}