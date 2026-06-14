import React from "react";

const NoPage = ()=>{
    const handle = (e)=>{
        alert('You double clicked button!')
    }
    return(
        <>
        <button onDoubleClick = {handle}>Double Click!</button>
        </>
    )
}
export default NoPage