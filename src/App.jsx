import { Route, Routes } from "react-router-dom"

import './App.css'
import Layout from "./layout/Layaout"
import Index from "./pages/Index"
import Episodes from "./pages/Episodes"
import Character from "./pages/Characters"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Index />}></Route>
        <Route path="/episodes" element={<Episodes />}></Route>
        <Route path="/character" element={<Character />}></Route>
      </Route>
    </Routes>
  )
}

export default App
