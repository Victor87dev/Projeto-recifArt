import { Route, Routes } from "react-router-dom";
import Home from '../pages/Home/Home'
import Sobre from '../pages/Sobre/sobre'

const AppRoutes = () => {
    return(
        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/sobrenos" element={<Sobre/>} />
        </Routes>
    )
}

export default AppRoutes;