
// // function Child(props)
// // {
// //     return(
// //         <div>
// //             <h1>{props.name}</h1>
// //         </div>
// //     )

// // }


// // function Child(props){
// //     return(
// //         <div>
// //             <hr />
// //             <h3>{"Name:"+props.name}</h3>
// //             <p>{"Roll:"+props.roll}</p>
// //             <p>Marks:{parseInt(props.marks)+1}</p>
// //             <hr />

// //         </div>
// //     )
// // }

// function Child(props){
//     return(
//         <div>
//             <hr />
//             <h3>Name:{props.obj.sname}</h3>
//             <h3>University:{props.obj.uni}</h3>
//             <hr />
//         </div>
//     )
// }
// export default Child


import React from "react";

// const Child = (props)=>{
//     return(
//         <>
//         <table border='5px'>
//             <thead>
//                 <th>Name</th>
//                 <th>Roll</th>
//                 <th>Marks</th>
//             </thead>
//             <tbody>
//         {
            
//             props.info.map((s)=>(
//                 <tr>
//                     <td>{s.name}</td>
//                     <td>{s.roll}</td>
//                     <td>{s.marks.join(',')}</td>
//                 </tr>

//             ))
          
//         }
//         </tbody>
//         </table>
//         </>
//     )
// }


const Child = (props)=>{
   return(
    <>
{
    props.array
    .filter((person)=>(person.branch === 'csit'))
    .map((person)=>(
        <div>
            <h1>Name:{person.name}</h1>
            <h2>Age:{person.age}</h2>
            <h2>Branch:{person.branch}</h2>
        </div>
    ))
}
    </>
   )

}
export default Child