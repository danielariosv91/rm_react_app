import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import Layout from "./layout/Layout"
import Home from "./pages/HomePage"
import Episodes from "./pages/EpisodesPage"
import Character from "./pages/CharactersPage"
import Location from "./pages/LocationPage"
import CharacterDetail from "./features/characters/pages/CharacterDetailPage"

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />}></Route>
                <Route path="/episodes" element={<Episodes />}></Route>
                <Route path="/character" element={<Character />}></Route>
                <Route path="/character/:id" element={<CharacterDetail />}></Route>
                <Route path="/locations" element={<Location />}></Route>
            </Route>
        </Routes>
    )
}

export default AppRoutes