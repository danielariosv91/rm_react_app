import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import Layout from "./layout/Layout"
import Index from "./pages/Index"
import Episodes from "./pages/Episodes"
import Character from "./pages/Characters"
import Location from "./pages/Location"

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Index />}></Route>
                <Route path="/episodes" element={<Episodes />}></Route>
                <Route path="/character" element={<Character />}></Route>
                <Route path="/locations" element={<Location />}></Route>
            </Route>
        </Routes>
    )
}

export default AppRoutes