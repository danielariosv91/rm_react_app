function EpisodeDetail({ character, setOpenModal, setEpisode }) {

    const handleModal = (e, episode) => {
        setOpenModal(true)
        setEpisode(episode)
    }

    return (
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
    )
}

export default EpisodeDetail;