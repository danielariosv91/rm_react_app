import { Route, Routes } from "react-router-dom"

import './App.css'
import Layout from "./layout/Layaout"
import Episodes from "./pages/Epidodes"
import Index from "./pages/Index"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Index />}></Route>
        <Route path="/episodes" element={<Episodes />}></Route>
      </Route>
    </Routes>
  )

}

export default App
