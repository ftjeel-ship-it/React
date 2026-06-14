// function Card(props){
//     return(
//         <div>
//             {
//                 props.p.map((product,index)=>(
//                     <div key={index}>
//                         <hr />
//                         <img src={product.image} alt={product.title} width={100} />
//                         <h1>Title:{product.title}</h1>
//                         <h3>Price:{product.price}</h3>
//                         <h3>Rating:{product.rating}⭐</h3>
//                         <hr />



//                     </div>
//                 ))
//             }
//         </div>
//     )
// }

// function Card(props){
//     return(
//         <div>
//             {
//                 props.p.filter((i)=>(i.marks>=25))
//                 .map((std)=>{
//                     return <div>
//                         <img src={std.img} alt="" />
//                         <h1>Name:{std.name}</h1>
//                         <h2>Marks:{std.marks}</h2>
//                     </div>
//                 })
//             }
//         </div>
//     )
// }


export default Card