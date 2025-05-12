import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getOneCharacter } from "../service/charactersService"
import { getOneEpisode } from "./../../../service/episodesService"

/** components */
import EpisodeDetail from './../../episodes/components/EpisodesDetail'

function CharacterDetail() {
    const { id } = useParams()
    const [modalContent, setModalContent] = useState()
    const [character, setCharacter] = useState(null)
    const [episode, setEpisode] = useState(null)
    const [loading, setLoading] = useState(true);

    const handleModal = async (e, episode) => {
        e.stopPropagation();

        setEpisode(episode)

        document.getElementById('my_modal_1').showModal()
    }

    useEffect(() => {
        const fetchCharacters = async () => {
            try {
                const data = await getOneCharacter(id);
                setCharacter(data)
            } catch (error) {
                console.log('Error al cargar episodios')
            } finally {
                setLoading(false)
            }
        }
        fetchCharacters()
    }, [id])

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
            <div class="flex justify-center">
                <div className="card card-dash bg-base-100 w-200 shadow-lg shadow-emerald-300/40">
                    <div className="card-body">
                        <div className="flex">
                            <div className="w-16 flex-auto">
                                {character ? (
                                    <>
                                        <div className="avatar mb-7">
                                            <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring-2 ring-offset-2">
                                                <img src={character.image} />
                                            </div>
                                        </div>

                                        <h1 className="text-lg text-success mb-1">{character.name}</h1>
                                        <span> {character.status} | {character.gender} </span>

                                        <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            Proin varius ullamcorper lobortis. Sed eget sem risus.</p>
                                    </>
                                ) : (
                                    <p>Character not found.</p>
                                )}
                            </div>

                            {/* TODO: Module this section */}
                            <EpisodeDetail character={character} />


                            {/* TODO: Module this modal */}
                            <dialog id="my_modal_1" className="modal">
                                <div className="modal-box">
                                    <h3 className="font-bold text-lg">{modalContent?.name}</h3>
                                    <p className="py-4">{modalContent?.episode}</p>
                                    <p className="py-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Proin varius ullamcorper lobortis. Sed eget sem risus</p>
                                    <div className="modal-action">
                                        <form method="dialog">
                                            {/* if there is a button in form, it will close the modal */}
                                            <button className="btn">Close</button>
                                        </form>
                                    </div>
                                </div>
                            </dialog>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CharacterDetail