import axios from 'axios';

const API_URL = 'https://rickandmortyapi.com/api/character';

export const getCharacters = async () => {
    const response = await axios.get(API_URL);
    return response.data
}

export const getFirstCharacters = async () => {
    const response = await axios.get(`${API_URL}/1,2,3`);
    return response.data
}