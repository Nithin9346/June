import {Link} from "react-router-dom"
function Home(){
    return(
        <>
        <h1>Home Page</h1>
        <Link to="/product/1">Samsung mobile</Link>
        <p>Best Mobile in the world</p>
        <br></br>
        <Link to="/product/2">Laptop</Link>
        <p>Best laptop</p>
        <br></br>
        <Link to="/product/3">Refrezirater</Link>
        <p>best refregerater</p>
        <br></br>
        <Link to="/product/4">Apple laptop</Link>
        <p>Best Ios System</p>
       
        </>
    )
}
export default Home;