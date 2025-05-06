import axios from 'axios';

const API_URL = 'https://rickandmortyapi.com/api/episode';

export const getEpisodies = async () => {
    const response = await axios.get(API_URL);
    return response.data
}