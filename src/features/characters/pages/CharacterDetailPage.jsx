import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

import { getOneEpisode } from "./../../../service/episodesService"

/** components */
import Modal from './../../../components/common/Modal'
import CharacterDetailView from './../components/CharacterDetailView'
import EpisodeDetail from './../../episodes/components/EpisodesDetail'

function CharacterDetail() {
    const { id } = useParams()
    const [modalContent, setModalContent] = useState()
    const [character, setCharacter] = useState(null)
    const [episode, setEpisode] = useState(null)
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        if (!episode) return;

        const fetchCharacters = async () => {
            try {
                const data = await getOneEpisode(episode);
                setModalContent(data)
            } catch (error) {
                console.log('Error al cargar episodios')
            } finally {
                setLoading(false)
            }
        }
        fetchCharacters()
    }, [episode])


    return (
        <>
            <div className="flex justify-center">
                <div className="card card-dash bg-base-100 w-200 shadow-lg shadow-emerald-300/40">
                    <div className="card-body">
                        <div className="flex">
                            <CharacterDetailView id={id} updateCharacter={setCharacter} />

                            <EpisodeDetail character={character} />

                            {/* TODO: trigger open modal */}
                            <Modal content={modalContent} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CharacterDetail