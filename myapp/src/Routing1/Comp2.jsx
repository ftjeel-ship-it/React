function Comp2(){
    let name = "LJU"
    return (
        <div>
            <h1>{name}</h1>
            <p>"{name}"</p>
            <p>{"{name}"}</p>
            <p>{"name"}</p>
            <p>{name + " test"} </p>
            <p>{name.toUpperCase()}</p>
            {[1,2,3]}
            <h1>{5+5}</h1>
            {[1,2,3].join(',')}

        </div>
    )
}
export default Comp2 
// id , name ,stad,map and milter display only those student whose standard is 5 increase there std by one 
// 3 display std 
