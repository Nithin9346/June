import { Route,Routes } from "react-router-dom";
import Home from "./Home";
import Product from "./Product";

function Index(){
    return(
        <>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/product/:id" element={<Product/>}></Route>
        </Routes>
        </>
    )
}
export default Index;