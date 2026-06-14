import React, { useState, useEffect } from "react";
import axios from 'axios';

// const A1 = ()=>{

//    const [joke, setJoke] = useState('');
//    const [punch, setPunch] = useState('');

//    useEffect(()=>{

//       const interval = setInterval(()=>{

//          axios
//          .get('https://official-joke-api.appspot.com/random_joke')

//          .then((res)=>{

//             console.log(res.data);

//             setJoke(res.data.setup);
//             setPunch(res.data.punchline);

//          })

//          .catch((err)=>{
//             console.log(err);
//          });

//       },2000);

//       return ()=> clearInterval(interval);

//    },[]);

//    return(
//       <div align='center'>

//          <h1>😂 Random Joke</h1>

//          <h3>Setup : {joke}</h3>

//          <h3>Punchline : {punch}</h3>

//       </div>
//    )
// }

// const A1 = () => {
//     const [fact, setFact] = useState('')

//     let c = () => {
        
//             axios
//             .get('https://randomuser.me/api/')
//             .then((res)=>{
//                 console.log(res.data)
//                 setFact(res.data.fact)
//             })
//             .catch((err)=>{
//                 console.log(err)
//             })


        
//     }
//     return( 
//         <div>
//             <p>{fact}</p>
//             <button onClick={c}>Fact</button>
//         </div>
//     )
// }


const A1 = () => {
  const [text, setText] = useState("");

  return (
    <div style={{ padding: "30px", textAlign: "center" }}>
      
      <h1>Character Counter</h1>

    <textarea
  rows="6"
  cols="40"
  placeholder="Type something..."
  value={text}
  onChange={(e) => setText(e.target.value)}
  style={{
    padding: "18px",
    fontSize: "20px",
    backgroundColor: "#2c2e31",
    color: "#e2b714",
    border: "2px solid #3a3d42",
    borderRadius: "12px",
    outline: "none",
    resize: "none",
    width: "500px",
    fontFamily: "monospace",
    boxShadow: "0 0 10px rgba(0,0,0,0.3)"
  }}
/>

      <h3
        style={{
          color: text.length > 100 ? "red" : "white"
        }}
      >
        Character Count: {text.length}
      </h3>

    </div>
  );
};

export default A1;
