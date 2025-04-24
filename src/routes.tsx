
import { Routes, Route } from "react-router-dom"
import { Game } from "./pages/game"
import { Play } from "./pages/play"

const Rotas = () =>{

    return(
        <>
            <Routes>
                <Route  path="/" element={<Play />} />
                <Route  path="game" element={<Game />} />                
            </Routes>
        </>
    )
}

export  {Rotas};