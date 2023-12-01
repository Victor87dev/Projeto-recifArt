import { Route, Routes } from "react-router-dom";
import Home from '../pages/Home/Home';
import Sobre from '../pages/Sobre/Sobre';
import Feirinha from "../pages/Feirinha/Feirinha";
import Perfil from "../pages/perfil/perfil";
import Blog from "../pages/Blog/Blog";
import Compra from "../pages/Compra/Compra"
import Artesoes from "../pages/artesoes/artesoes";
import EscolhaCad from "../pages/Escolha/EscolhaCad";
import EscolhaLog from "../pages/Escolha/EscolhaLog";
import LoginUser from "../pages/login/login_usuario";
import CadastroUser from "../pages/Cadastro/cadastro_usuario";
import LoginEmp from "../pages/login/login_empresa";
import CadastroEmp from "../pages/Cadastro/cadastro_empresa";
import LoginArt from "../pages/login/login_artesao";
import CadastroArt from "../pages/Cadastro/cadastro_artesao";



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
            <Route path="/escolhacad" element={<EscolhaCad/>}/>
            <Route path="/escolhalog" element={<EscolhaLog/>}/>
            <Route path= "/login_usuario" element={<LoginUser/>}/>
            <Route path= "/cadastro_usuario" element={<CadastroUser/>}/>
            <Route path= "/login_empresa" element={<LoginEmp/>}/>
            <Route path= "/cadastro_empresa" element={<CadastroEmp/>}/>
            <Route path= "/login_artesao" element={<LoginArt/>}/>
            <Route path= "/cadastro_artesao" element={<CadastroArt/>}/>
        </Routes>
    )
}

export default AppRoutes;