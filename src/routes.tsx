import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import Header from "./components/Header";

import National from "./pages/National";
import International from "./pages/International";
import Exclusive from "./pages/Exclusive";
import Cart from "./pages/Cart";

function AppRoutes(){
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<National/>}/>
                <Route path="/internacionais" element={<International/>}/>
                <Route path="/exclusivas" element={<Exclusive/>}/>
                <Route path="/carrinho" element={<Cart/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;