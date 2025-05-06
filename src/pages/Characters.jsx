import { useEffect, useState } from "react"
import { Paper, Table, TableContainer, TableCell, TableHead, TableBody, TableRow, } from "../libraries/MUI"
import { getCharacters } from "../service/charactersService";

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
                        {characters.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.gender}</TableCell>
                                <TableCell align="right">{row.status}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default Character