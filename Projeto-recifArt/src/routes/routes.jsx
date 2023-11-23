import { Route, Routes } from "react-router-dom";
import Home from '../pages/Home/Home';
import Sobre from '../pages/Sobre/Sobre';
import Feirinha from "../pages/Feirinha/Feirinha";
import Blog from "../pages/Blog/Blog";
const AppRoutes = () => {
    return(
        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/sobrenos" element={<Sobre/>} />
            <Route path="/feirinha" element={<Feirinha/>} />
            <Route path="/blog" element={<Blog/>} />
        </Routes>
    )
}

export default AppRoutes;