import { Route, Routes } from "react-router-dom";
import Home from '../pages/Home'
import Sobrenos from '../pages/Sobrenos'

const AppRoutes = () => {
    return(
        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/sobrenos" element={<Sobrenos />} />

        </Routes>
    )
}

export default AppRoutes;