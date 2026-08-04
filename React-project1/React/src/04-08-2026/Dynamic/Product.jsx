import { useParams } from "react-router-dom";
function Product(){
    const {id}=useParams();
    return(
        <>
        <h1>Product Page</h1>
        <h2>Product ID : {id}</h2>
        </>
    )
}
export default Product;