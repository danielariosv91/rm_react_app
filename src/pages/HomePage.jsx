
import { Divider, Typography } from "../libraries/MUI"

import CharacterCard from "./../components/CharacterCard"

function Index() {
    return (
        <>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                This project is a fun and interactive built with <strong>React</strong>

            </Typography>

            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                It uses the public <a href="https://rickandmortyapi.com/" target="_blank" rel="noopener noreferrer">Rick and Morty API</a> to display detailed information about characters, locations, and episodes from the series.
            </Typography>

            <Divider />

            <Typography variant="h6" component="div" sx={{ flexGrow: 1, marginTop: 5, marginBottom: 5 }}>
                Characters
            </Typography>


            <CharacterCard />
        </>
    )
}

export default Index