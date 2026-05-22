import React from "react"
import {BrowserRouter as Router , Route , Routes , Link } from 'react-router-dom'
import Home from './Home'
import Shop from './Shop'
import Contact from './Contact'
import NoPage from "./NoPage"


function My(){
    return(
        <div>
            <Router>
              <div class = 'main-route'>
                <ul style={{display:'flex',gap:'30px',listStyle:'none'}}>
                    <li><Link to='/' style={{textDecoration:'none'}}>Home</Link></li>
                    <li><Link to='/shop' style={{textDecoration:'none'}}>Shop</Link></li>
                    <li><Link to='/contact' style={{textDecoration:'none'}} >Contact</Link></li>
                </ul>
              </div>


              <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/shop" element={<Shop/>}/>
                <Route path="*" element={<NoPage/>}/>
              </Routes>
            </Router>
        </div>
    )
}
export default My