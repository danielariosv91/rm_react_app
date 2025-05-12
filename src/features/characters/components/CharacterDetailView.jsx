function CharacterDetailView({ character }) {
    return (
        <div className="w-16 flex-auto">
            {character ? (
                <>
                    <div className="avatar mb-7">
                        <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring-2 ring-offset-2">
                            <img src={character.image} />
                        </div>
                    </div>

                    <h1 className="text-lg text-success mb-1">{character.name}</h1>
                    <span> {character.status} | {character.gender} | {character.origin.name} </span>

                    <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Proin varius ullamcorper lobortis. Sed eget sem risus.</p>
                </>
            ) : (
                <p>Character not found.</p>
            )}
        </div>
    )
}

export default CharacterDetailView;