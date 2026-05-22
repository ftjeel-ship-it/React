//? display a list of products using props 
//? 1) create a ProductCard to show product details like title price rating and image  
//? 2) use a product list component to store Product data and display multiple Card compoment using map

// import Card from './Card.jsx'
// import img1 from './assets/OIP.jpeg'
// import img2 from './assets/hero.png'

// function List(){

//     let array = [
//         {
//             title:'iphone',
//             price:'89000',
//             rating:4.8,
//             image:img1
//         },
//         {
//             title:'samsung',
//             price:'80000',
//             rating:4.5,
//             image:img2
//         }
//     ]
//     return(
//         <div>
//            <Card p = {array}/>
           
//         </div>
//     )
// }

//? a list of student using props create a student card to show details like student roll number name marks and eye card 
//? display student with 25 marks
//? use student list component to store student data 

// function List(){
//     let a = [
//         {
//             name : 'Jeel',
//             number : 1,
//             roll : 18,
//             marks : 25,
//             img : "https://th.bing.com/th/id/OIP.6y05xOrsBzlkStpYzq5IuAHaEr?w=271&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"

//         },
//          {
//             name : 'Ved',
//             number : 2,
//             roll : 45,
//             marks : 21,
//             img : "https://th.bing.com/th/id/OIP.px2XsND0IGJNSvXYEamToAHaHa?w=171&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"

//         }
//     ]
//     return(
//         <div>
//             <Card p={a}/>
//         </div>
//     )
// }

//? to display alert box with text welcome to lju by clicking on a button provide css to button like color bg color padding and margin 
// function List(){
//     return(
//         <div>
//             <button style={{color:'red',backgroundColor:'white',padding:'10px',margin:'20px', height:'50px'} }  onClick={()=>{alert('Welcome to lju')}}>Click here</button>

//         </div>
//     )
// }
//? to display value in cosole white changing 

// function List(){
//     function handleChange(e){
//         console.log(e.target.value)

//     }
//     return(
//         <div>
//             <textarea onChange={handleChange()}></textarea>
//         </div>
//     )
// }



// function List(){
//      return(
//          <div>
//              <button style={{color:'red',backgroundColor:'white',padding:'10px',margin:'20px', height:'50px',borderRadius:'10%'} }  onDoubleClick={()=>{alert('Welcome to lju')}}>Click here</button>

//          </div>
//      )
//     }

// function List(){
//      return(
//          <div>
//            <form action="" onSubmit={()=>{alert('Welcome to lju')}}>
//             Name:<input type="text" />
//               <button style={{color:'red',backgroundColor:'white',padding:'10px',margin:'20px', height:'50px',borderRadius:'10%'} }  >Click here</button>
//            </form>
//          </div>
//      )
//     }

//? create a react using functional components and react router dom 
//? create routs for home shop contact and 404 not found 
//? 2) implement nevigation using link  display each and every page on respective route 
export default List