import React from "react";

const Food = (props)=>{
    return(
        <>
       {
        props.array
        .map((s)=>(
            <div>
                <h1>{s.name}</h1>
                <h1>{s.price}</h1>

            </div>
        ))
       }
        </>
    )
}
export default Food