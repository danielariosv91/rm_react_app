import { useEffect, useState } from "react"
import { Grid, Paper, Table, TableContainer, TableCell, TableHead, TableBody, TableRow, } from "../libraries/MUI"
import { getCharacters } from "../service/charactersService";
import DataTable from "../components/Datatable";

function Character() {

    const [characters, setcharacters] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCharacters = async () => {
            try {
                const data = await getCharacters();
                const { info, results } = data;

                const mapResult = results.map((result) => {
                    return {
                        id: result.id,
                        name: result.name,
                        gender: result.gender,
                        status: result.status
                    }
                })

                setcharacters(mapResult)
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

            <Grid container spacing={2}
                sx={{
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                <Grid size={{ xs: 6, md: 8 }}>
                    <DataTable data={characters} />
                </Grid>
            </Grid>

        </>
    )
}

export default Character