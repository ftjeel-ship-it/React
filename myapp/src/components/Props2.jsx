import React from "react"


const Props2 = (props) =>{
    return(
       <>
       {
        props.data.map((s,index)=>(
            <div key={index}>
                <img src={s.image} alt="abc" />
                <h2>{s.name}</h2>
                <h2>{s.price}</h2>
                <h2>{s.rating}</h2>
            </div>
        ))
       }
       </>
    )
}

export default Props2