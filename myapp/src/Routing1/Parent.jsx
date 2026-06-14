// import Child from './Child.jsx'

// function Parent(){
//     return(
//         <div>
//             <Child name = 'Jeel'/>
//             <Child name = "ved" />
//         </div>
//     )
// }

// function Parent(){
//     return(
//         <div>
//             <Child name="Jeel" roll="18" marks="80"/>
//             <Child name="Ved" roll="45" marks="800"/>


//         </div>
//     )
// }

//? using props to dispaly student details create a parent component pass the following data to child component using props.
//? name,roll,marks and increase marks by 1 and sipaly updated marks

//? to pass an object from one component to another component 
//? 2) create an object named details contain student name and uni name 
//? 3) pass details to child 
//? 4) in child dipslay 

// function Parent(){
//     let a = {
//         sname:'ved',
//         uni:'lj'
//     }
//     return(

//         <div>
//             <Child obj = {a}/>

//         </div>
//     )

// }



// export default Parent

import React from "react";
import Child from './Child'

// const Parent = ()=>{
//     const student = [
//         {
//             name:'jeel',
//             roll:18,
//             marks:[18,20,45,17]
//         },
//         {
//             name:'ved',
//             roll:45,
//             marks:[18,20,45,17]
//         }
//     ]

//     return (
//         <>
//         <Child info = {student}/>
//         </>
//     )
// }


// 

import Product from './Product'
const Parent = ()=>{
    const a = 5

    return (
        <>
        <Product s = {a}/>
        </>
    )
}
export default Parent