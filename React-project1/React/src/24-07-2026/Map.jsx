const products=[

{id:1,name:"Laptop"},
{id:2,name:"Phone"},
{id:3,name:"TV"}

]

function Map(){

return(

<>
{
products.map((item)=>(
<h2 key={item.id}>{item.name}</h2>
))
}
</>

)

}
export default Map