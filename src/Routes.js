import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./pages/Home";
import CadastroCli from "./pages/CadastroCli";
import Financiamento from "./pages/SimulaçaodeFinanciamento";
import ContaCorrente from "./pages/MovimentaçaoContaCorrente";
import Sobrenos from "./pages/Sobrenos";
import Header from "./Components/Header";
function RoutesApp () {
    return <BrowserRouter>
    <Header/>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/CadastroCli" element={<CadastroCli/>} />
            <Route path="/SimulaçaodeFinanciamento" element={<Financiamento/>} />
            <Route path="/MovimentaçaoContaCorrente" element={<ContaCorrente/>} />
            <Route path="/Sobrenos" element={<Sobrenos/>} />
        </Routes>
    </BrowserRouter>
}
export default RoutesApp;