import { lazy,Suspense } from "react";

const Home=lazy(()=>import("./Home"))
const About = lazy(()=>import("./About"))

function Main(){
    return(
        <>
         <Suspense fallback={<h2>Loadoing...</h2>}>
            <Home/>
            <About/>
        </Suspense>
        </>
    )
}
export default Main;