import { useEffect, useState } from "react"
import { getEpisodies } from "../service/episodesService";
import { Paper, Table, TableContainer, TableCell, TableHead, TableBody, TableRow, } from "./../libraries/MUI"

function Episodes() {

    const [episodes, setEpisodes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchEpisodes = async () => {
            try {
                const data = await getEpisodies();
                const { info, results } = data;

                const mapResult = results.map((result) => {
                    return {
                        name: result.name,
                        episode: result.episode,
                        air_date: result.air_date
                    }
                })

                setEpisodes(mapResult)
            } catch (error) {
                console.log('Error al cargar episodios')
            } finally {
                setLoading(false)
            }
        }
        fetchEpisodes()
    }, [])

    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Episode</TableCell>
                            <TableCell align="right">On Air</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {episodes.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.episode}</TableCell>
                                <TableCell align="right">{row.air_date}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default Episodes