//? while click on button inc val by size 

import react from 'react'
import { useReducer } from 'react'

function reducer(state,action){
    return state + action 
}
function UseReducer(){
    const [state,dispatch] = useReducer(reducer , 20)
    return (
        <div align = 'center'>
            <h1>{state}</h1>
            <button onClick={()=>dispatch(5)}>Click here!</button>
        </div>
    )
}
export default UseReducer