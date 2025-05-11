import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { getCharacters } from "./../service/charactersService";


function TableCharacter() {
    const navigate = useNavigate();
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
                        image: result.image,
                        species: result.species,
                        location: result.location.name,
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

    const handleNavigate = (event, id) => {
        event.stopPropagation();
        navigate(`/character/${id}`);
    }

    return (
        <>
            <div className="card card-border bg-base-100 w-fill mx-auto mt-7 shadow-lg shadow-emerald-300/40">
                <div className="card-body">
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>

                                    <th>Name</th>
                                    <th>Specie</th>
                                    <th>Gender</th>
                                    <th>Status</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filtered.map((c) => (
                                    <tr>
                                        <td>
                                            <div className="flex items-center gap-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle h-12 w-12">
                                                        <img
                                                            src={c.image}
                                                            alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold">{c.name}</div>
                                                    <div className="text-sm opacity-50">{c.location}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>{c.species}</td>
                                        <td>{c.gender}</td>
                                        <td>{c.status}</td>
                                        <th>
                                            <button className="btn btn-xs btn-success" onClick={(e) => handleNavigate(e, c.id)}>
                                                Detail
                                            </button>
                                        </th>
                                    </tr>

                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="justify-center card-actions my-7 ">
                    {/* Pagination Controls */}
                    <div className="join">
                        {/* Dynamically Generate Pagination Buttons */}
                        {Array.from({ length: pages }, (_, index) => (
                            <button
                                key={index}
                                className={`shadow-lg/50 join-item btn btn-square ${currentPage === index + 1 ? "btn-active" : ""
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