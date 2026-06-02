import React from 'react'
import {useState} from 'react'

//? WAP to built react app having a button wich increase count by 1 while clicking it 

// const UseState = ()=>{
//     const [count,setCount] = useState(0);

//     const handleCount = ()=>{
//         setCount(count+1)
//     }

//     return (
//         <div>
//             <p style={{color:'beige' , margin : '20px' , fontSize : '30px'}}>You clicked {count} Times.</p>
//             <button onClick = {handleCount}>click here</button>
//         </div>
//     )
// }

// --------------------------------------------------------------------------------------------------------------

//? having buttons to inc and dec by clicking button and increment ->perform only if num <10 and dec->should be perform
//? if num is > 0



// const UseState = ()=>{
//     const [count ,setCount] = useState(0);

//     const inc = ()=>{
//         if(count<10){
//             setCount(count+1);
//         }
//     }
//     const dec = ()=>{
//         if(count>0){
//             setCount(count-1);
//         }
//     }
//     return(
//         <div>
//             <h1 style={{color:'beige' , margin : '20px' , fontSize : '30px'}}>{count}</h1>
//             <button onClick={inc} style={{color:'black' , backgroundColor:'beige',margin : '20px'}}>Increment</button><br />
//             <button onClick={dec} style={{color:'black' , backgroundColor:'beige',margin : '20px'}}>Decrement</button>
//         </div>
//     )
// }

// --------------------------------------------------------------------------------------------------------------


//? change button text while clicking on modified text should change to 

// const UseState = ()=>{
//     const [txt ,chnageName] = useState('Modified text');

//     const update = ()=>{
//         if(txt == 'Modified text' ){
//             chnageName('Updated text')
//         }else{
//             chnageName('Modified text')
//         }
//     }

    
//     return(
//         <div>
//             <button  id='demo'  onClick={update} style={{color:'black' , backgroundColor:'beige',margin : '20px'}}> {txt}</button>
//         </div>
//     )
// }

// --------------------------------------------------------------------------------------------------------------


// ? WAP 1)add 3 button change text change color hide or show 
// ? 1) add heading Jeel finaviya is red color also add 'react js hooks' in h2 
// ? 2)click on changetext button text should change to welcomestudent  
// ? 3)by clicking on change color button change color of text to blue  this color change should be perform while double click
// ? 4)initally button text shoud be hide while clicking on button button text show and react js hooks is gone hide


// const UseState = ()=>{
//     const [text,handleText]=useState('Modified text')
//     const changeText=()=>{

//         if (text == 'Modified text'){
//             handleText('Updated')
//         }else{
//             handleText('Modified text')
//         }
//     }

//     const [txt,handleReact]=useState('React JS Hooks')
//     const update=()=>{
    
//     }

//     const [c,handleColor]=useState('red')
//     const changeColor=()=>{
//         if(c=='red'){
//             handleColor('blue')
//         }else{
//             handleColor('red')
//         }

//     }
//     const [status,handleHide] = useState('hide')
//     const changeButtons=()=>{
//         if (status == 'hide'){
//             handleHide('show')
//             update()
//         }else{
//             handleHide('hide')
//             handleText('Welcome Jeel')
//         }
//     }
//     return(
//         <div>
//             <h2 style={{color:c}}>Welcome Jeel {txt}</h2>
//             <button onClick={changeText}>{text}</button>
//             <br />
//             <button onDoubleClick={changeColor}>Color</button>
//             <br />
//             <button onClick={changeButtons}>{status}</button>

//         </div>
//     )
// }

// --------------------------------------------------------------------------------------------------------------

// ? WAP having a button which changes and image by clicking on it 


// const UseState = ()=>{
//     const[i,status]=useState(0)
//     const [src, handleImg] = useState('https://picsum.photos/300')

//     const change = ()=>{
//         if(i==0){
//             handleImg('https://th.bing.com/th/id/OIP.96zMshtN7pHiZU4Da4wnvgHaDw?w=281&h=177&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3')
//             status(1)
//         }else{
//             handleImg('https://picsum.photos/300/201')
//             status(0)
//         }
//     }

//     return(
//         <div>
//             <img src={src} alt="image" />
//             <button onClick={change}>Click</button>
//         </div>
//     )
// }

// --------------------------------------------------------------------------------------------------------------

// ? WAP by clicking on button image changes randomly from given images 
// const UseState = ()=>{
//    const a1 = [
//   "https://picsum.photos/300/200?random=1",
//   "https://picsum.photos/300/200?random=2",
//   "https://picsum.photos/300/200?random=3",
//   "https://picsum.photos/300/200?random=4",
//   "https://picsum.photos/300/200?random=5"
// ];

//     const [a , handleRandom] = useState(a1[0])

//     const handle = ()=>{
//         handleRandom(a1[Math.floor(Math.random()*a1.length)])

//     }

//     return(
//         <div>
//             <img src={a} alt=".."/>
//             <button onClick={handle}>Click</button>
//         </div>
//     )

// }

// --------------------------------------------------------------------------------------------------------------


// ? 

const UseState = ()=>{
    const [data,setData] = useState({})

    const handleChange = (e)=>{
        const {name,value} = e.target;

        setData({...data,[name]:value});

    }
    return(
        <div>

            First: <input type="text" name="first" onChange={handleChange} /><br />
            Last: <input type="text" name="last" onChange={handleChange} /><br />

            <h1>FirstName: {data.first}</h1>
            <h1>LastName: {data.last}</h1>



        </div>
    )
}


export default UseState