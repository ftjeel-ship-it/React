import React from "react";
import { useEffect, useState } from "react";

// ? add two button inc count by one with each click display alert as an effect on specified condition 
// ? 1) effect will be triggered only when oage render for the first time .
// ? 2) effect will triger every time the button a is clicked
// ? 3) when the page rendered for the first time and on every update event trigger  

// function UE1() {
//     const [count, setCount] = useState(0);
//     const [cal, setCal] = useState(0);

//     useEffect(() => {
//         alert('Clicked once')
//     }, [])
//     useEffect(() => {
//         alert('Button A clicked.')

//     }, [count])
//     useEffect(() => {
//         alert('On every update')

//     })
//     const changeCount = () => {
//         setCount(count + 1)
//     }
//     const changeCal = () => {
//         setCal(cal + 1)
//     }

//     return (
//         <div align='center'>
//             <button style={{ padding: "10px 18px", margin: "10px", backgroundColor: "#2563eb", color: "white", border: "none", borderRadius: "6px", cursor: "pointer" }} onClick={changeCount}>Button A {count}</button><br />

//             <button style={{ padding: "10px 18px", margin: "10px", backgroundColor: "#16a34a", color: "white", border: "none", borderRadius: "6px", cursor: "pointer" }} onClick={changeCal}>Button B {cal}</button>
//         </div>
//     )

// }


//? to create a digital clock running continueously

// function UE1() {

//     const [date, setDate] = useState(new Date());

//     useEffect(() => {
//         const timer = setInterval(() => {
//             setDate(new Date())
//         }, 1000);
//     }
//     )
//     return (
//         <div align='center'><h1 style={{ backgroundColor: "#111", color: "#00ff88", display: "inline-block", padding: "20px 40px", borderRadius: "12px", fontSize: "55px", fontFamily: "monospace", boxShadow: "0 0 20px #00ff88" }}><br /><br />{date.getHours()}:{date.getMinutes()}:{date.getSeconds()}</h1></div>
//     )



// }

// function UE1() {
//         const [num1 , setNum1] = useState(0);
//         const [num2 , setum2] = useState(0);
//         const [add , setAdd] = useState(0);
//         const [sub , setSub] = useState(0);

//         useEffect( () => {
//             if (add != 0){
//                 alert('Addition button clicked.')
//             }
//         },[add])
//         const addition = () =>{
//             setAdd( )
//         }



// }
export default UE1