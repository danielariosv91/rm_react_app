import { useState, useEffect } from "react";
import { getCharacters } from "./../service/charactersService";


function TableCharacter() {
    const items_per_page = 5;
    const [pages, setPages] = useState(0); // Total number of pages
    const [filtered, setFiltered] = useState([]); // Pagination
    const [currentPage, setCurrentPage] = useState(1); // Current page number
    const [characters, setCharacters] = useState([]); // Full list of characters
    const [loading, setLoading] = useState(true); // Loading state

    const initalizePagination = () => {
        const total_items = characters.length;
        const total_pages = Math.ceil(total_items / items_per_page)

        console.log(characters)

        const currentItems = characters.slice(
            (currentPage - 1) * items_per_page,
            currentPage * items_per_page
        );

        setPages(total_pages)
        setFiltered(currentItems)
    }

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

                setCharacters(mapResult)
            } catch (error) {
                console.log('Error al cargar episodios')
            } finally {
                setLoading(false)
            }
        }
        fetchCharacters()
    }, [])

    useEffect(() => {
        initalizePagination()
    }, [characters, currentPage])

    // Handle Page Change
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <>

            <div className="card card-border bg-zinc-100 w-96">
                <div className="card-body text-base-100">
                    <div className="overflow-x-auto">
                        <table className="table ">
                            {/* head */}
                            <thead>
                                <tr className="text-base-100">
                                    <th></th>
                                    <th>Name</th>
                                    <th>Job</th>
                                    <th>Favorite Color</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                {filtered.map(c =>
                                    <tr>
                                        <th>{c.id}</th>
                                        <td>{c.name}</td>
                                        <td>{c.gender}</td>
                                        <td>{c.status}</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>

                    <div className="join mt-7">
                        {Array.from({ length: pages }, (_, index) => (
                            <button
                                key={index}
                                className={`join-item btn btn-square ${currentPage === index + 1 ? "btn-active" : ""
                                    }`}
                                onClick={() => handlePageChange(index + 1)}
                            >
                                {index + 1}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default TableCharacter;