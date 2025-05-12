import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getOneCharacter } from "../service/charactersService"
import { getOneEpisode } from "./../../../service/episodesService"

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
                            <div className="w-84 flex-auto px-7">
                                <div className="w-100 flex-auto ">
                                    <div>
                                        <span className="mb-1">Episodes</span>
                                    </div>

                                    <div className="stats">
                                        <div className="stat">
                                            <div className="stat-title">Total Episodes Appearence</div>
                                            <div className="stat-value">{character?.episode.length}</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-100 flex-auto">
                                    {character?.episode.map((item) => (
                                        <div className="avatar avatar-placeholder mx-0.5 my-0.5">
                                            <div className="bg-neutral text-neutral-content w-8 rounded-full">
                                                {/* Open the modal using document.getElementById('ID').showModal() method */}
                                                <button className="btn" onClick={(e) => handleModal(e, item.ep)}>{item.ep}</button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>


                           
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CharacterDetail