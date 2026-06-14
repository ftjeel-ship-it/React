import React from "react"
import {BrowserRouter as Router,Route,Routes,Link} from 'react-router-dom'
import Home from './Routing1/Home'
import NoPage from "./Routing1/NoPage"
import Food from './Routing1/Food'
import Contact from './Routing1/Contact'




const App = ()=>{
  const a = [
    {
      name:'pro1',
      price : 127000
    },
    {
      name:'pro2',
      price:118000
    }
  ]
  return(
   <>
   <Router>
   <ul>
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/contact'>Contact</Link></li>
    <li><Link to='/food'>Food</Link></li>
   </ul>
   <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/contact' element={<Contact/>} />
    <Route path='/food' element={<Food array = {a}/>} />
    <Route path='*' element={<NoPage/>} />
   </Routes>

   


  </Router>
   </>
  )
}
export default App