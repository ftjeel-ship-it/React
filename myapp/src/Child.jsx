
// function Child(props)
// {
//     return(
//         <div>
//             <h1>{props.name}</h1>
//         </div>
//     )

// }


// function Child(props){
//     return(
//         <div>
//             <hr />
//             <h3>{"Name:"+props.name}</h3>
//             <p>{"Roll:"+props.roll}</p>
//             <p>Marks:{parseInt(props.marks)+1}</p>
//             <hr />

//         </div>
//     )
// }

function Child(props){
    return(
        <div>
            <hr />
            <h3>Name:{props.obj.sname}</h3>
            <h3>University:{props.obj.uni}</h3>
            <hr />
        </div>
    )
}
export default Child