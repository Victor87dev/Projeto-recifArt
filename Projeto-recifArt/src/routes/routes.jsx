import { Route, Routes } from "react-router-dom";
import Home from '../pages/Home/Home';
import Sobre from '../pages/Sobre/Sobre';
import Feirinha from "../pages/Feirinha/Feirinha";
import Perfil from "../pages/perfil/perfil";
import Blog from "../pages/Blog/Blog";
import Compra from "../pages/Compra/Compra"
import Artesoes from "../pages/artesoes/artesoes";
import Escolha from "../pages/Escolha/Escolha";
const AppRoutes = () => {
    return(
        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/sobrenos" element={<Sobre/>} />
            <Route path="/feirinha" element={<Feirinha/>} />
            <Route path="/blog" element={<Blog/>} />
            <Route path="/perfil" element={<Perfil/>}/>
            <Route path="/compra" element={<Compra/>} />
            <Route path="/artesoes" element={<Artesoes/>} />
            <Route path="/escolha" element={<Escolha/>}/>
        </Routes>
    )
}

export default AppRoutes;