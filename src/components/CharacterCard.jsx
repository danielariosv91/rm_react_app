import { useEffect, useState } from "react"
import CardItem from "../components/common/Card";
import Grid from '@mui/material/Grid';
import { getFirstCharacters } from "../service/charactersService";


export default function CharacterCard() {
    const [characters, setcharacters] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCharacters = async () => {
            try {
                const data = await getFirstCharacters();
                setcharacters(data)
            } catch (error) {
                console.log('Error al cargar episodios')
            } finally {
                setLoading(false)
            }
        }
        fetchCharacters()
    }, [])

    return (
        <>
            <Grid container spacing={8} justifyContent="center">
                {characters.map((item) =>
                    <CardItem item={item} key={item.id} />
                )}
            </Grid>
        </>
    )
}

//export default CharacterCard