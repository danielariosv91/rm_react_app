import axios from 'axios';

const API_URL = 'https://rickandmortyapi.com/api/character';

export const getCharacters = async () => {
    const response = await axios.get(API_URL);
    return response.data
}

export const getFirstCharacters = async () => {
    const response = await axios.get(`${API_URL}/1,2,3`);
    return response
}

export const getOneCharacter = async (id) => {
    const response = await axios.get(`${API_URL}/${id}`);
    console.log(mapEpisodeWithId(response.data))
    console.log(mapEpisodeWithId(response.data))
    return mapEpisodeWithId(response.data)
}

const mapEpisodeWithId = (item) => {
    return {
        ...item,
        episode: item.episode.map(ep => {
            const episodeId = ep.split('/').pop(); // Extract episode ID
            return {
                url: ep,
                ep: parseInt(episodeId, 10) // Add the episode ID as a number
            };
        })
    }
}