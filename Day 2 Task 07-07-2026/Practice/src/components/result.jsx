function Result(){
    const name="Nithin";
    const marks=80;
    return(
        <>
        <h1>{name}</h1>
        <h2>Marks: {marks}</h2>
        <h2>Result : {marks >=35 ? "pass" : "fail"}</h2>

        </>
    )
}
export default Result;