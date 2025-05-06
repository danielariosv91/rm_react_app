import { useEffect, useState } from "react"
import { Grid, Paper, Table, TableContainer, TableCell, TableHead, TableBody, TableRow, } from "../libraries/MUI"
import { getLocations } from "../service/locationsService";
import DataTable from "../components/Datatable";

function Location() {

    const [locations, setlocations] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCharacters = async () => {
            try {
                const data = await getLocations();
                const { info, results } = data;

                const mapResult = results.map((result) => {
                    return {
                        id: result.id,
                        name: result.name,
                        dimension: result.dimension,
                        type: result.type
                    }
                })

                setlocations(mapResult)
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
                    <DataTable data={locations} />
                </Grid>
            </Grid>

        </>
    )
}

export default Location