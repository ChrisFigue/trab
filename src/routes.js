import {BrowserRouter,
Routes,
Route,
Router} from 'react-router-dom'
import Home from './pages/Home';
import Cliente from './pages/Cliente';
import Sobre from './pages/Sobre';

function RoutesApp (){
    return(
    <BrowserRouter>
    <Routes>
    <Route path ="/"element={<Home/>}/>
    <Route path ="/"element={<Cliente/>}/>
    <Route path ="/"element={<Sobre/>}/>


    </Routes>
    </BrowserRouter>



    )
}
export default RoutesApp;