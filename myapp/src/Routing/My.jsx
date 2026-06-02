import React from "react"
import {BrowserRouter as Router , Route , Routes , Link } from 'react-router-dom'
import Home from './Home'
// import Shop from './Shop'
// import Contact from './Contact'
import Product from './Product'
import NoPage from "./NoPage"

//? 1)main.jsx to setup the router and define a routes 2) home.jsx home.jsx for home page 3)product.jsx for product page
//? -->create a react router include two route home and product implement navigation between these route when a user
//? clicks on the home page link it should navigate to the home page and display welcome to our shop within an h1 tag
//? with blue color also include link to product page a product page that display 3 product info name price and image
//? using props when a user clicks on product page link it should navigate to product page and display products info using props. 

// function My(){
//     return(
//         <div>
//             <Router>
//               <div class = 'main-route'>
//                 <ul style={{display:'flex',gap:'30px',listStyle:'none'}}>
//                     <li><Link to='/' style={{textDecoration:'none'}}>Home</Link></li>
//                     <li><Link to='/shop' style={{textDecoration:'none'}}>Shop</Link></li>
//                     <li><Link to='/contact' style={{textDecoration:'none'}} >Contact</Link></li>
//                 </ul>
//               </div>


//               <Routes>
//                 <Route path="/" element={<Home/>}/>
//                 <Route path="/contact" element={<Contact/>}/>
//                 <Route path="/shop" element={<Shop/>}/>
//                 <Route path="*" element={<NoPage/>}/>
//               </Routes>
//             </Router>
//         </div>
//     )
// }



// function My(){
//   const product = [
//     {name:'p1',
//       price:20000,
//       pic:"https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg"
//     },
//      {name:'p2',
//       price:30000,
//       pic:"https://cdn11.bigcommerce.com/s-21x65e8kfn/images/stencil/original/products/66052/318010/SAU4881_1000_7__64177.1720777528.jpg"
//     },
//      {name:'p3',
//       price:10000,
//       pic:"https://cdn11.bigcommerce.com/s-21x65e8kfn/images/stencil/original/products/66052/318010/SAU4881_1000_7__64177.1720777528.jpg"
//     }
//   ]
//   return(
//     <div>
//       <Router>
//         <div className = "">
//           <ul style={{display:'flex' ,gap:'30px'}}>
//             {/* <li><Link to='/'>Home</Link></li> */}
//             {/* <li><Link to='/product'>Product</Link></li> */}
//           </ul>
//         </div>
     

//     <Routes>
//       <Route path='/' element={<Home/>}/>
//       <Route path='/product' element={<Product info={product}/>}/>
//       <Route path='*' element={<NoPage/>} />
//     </Routes>

//      </Router>
//     </div>
//   )
// }


//? add a textfield and submit button while changing the value in textfield display it below the form diplay this textfeild value
//? in an alert box upone submiting it 
//? add a button to perform click and double click on click event  display msg in h3 tag you clicked onece
//? on double click diplay you click twice msg should be display below the button 










export default My