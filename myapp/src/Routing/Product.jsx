import React from "react";

function Product(props){
    return(
        <div>
            <h1>Product Details:</h1>
            {
                props.info.map((i,index)=>{
                   return <div key={index}>
                    <h2>Image_Name : {i.name}</h2>
                    <h3 style={{color:'green'}}>Image_Price : {i.price}</h3>
                    <img src = {i.pic} width={200} height = {200}/>
                   </div>
                })
            }
        </div>
    )
}
export default Product