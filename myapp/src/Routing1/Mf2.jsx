// array of 10 number display only even number using filter

//  ______________________________________________________________________

// function Mf2(){
//     let a = [1,2,3,4,5,6,7,8,9,10]

//     return(
//         <div>
//             All<h2>{a.join(',')}</h2>
//             Even: <br />

//             {
//                a.filter((i)=>(i%2==0)).join(',')
//             }
//         </div>
//     )
// }
//  ______________________________________________________________________

//? an array of  fruit object with item id ,name,price and availablity perform...using map,filter
//? 1) display only available fruits increase there price by 10 display name,updated price

function Mf2(){
    let a = [
        {
            itemname :'mango',
            id:1,
            price:1000,
            availablity : true
        },
         {
            itemname :'banana',

            id:2,
            price:500,
            availablity : true
        },
         {
            itemname :'Watermelon',

            id:3,
            price:10,
            availablity : false
        }
    ]

    return(
        <div>
            <h2>__Fruits__</h2>
            {
                a.filter((a)=>(a.availablity))
                .map((a)=>(
                    <div>
                        <h2>Price : {a.price+10}</h2>
                        <h2>Name : {a.itemname}</h2>
                    </div>
                ))
            }
        </div> 
    )
}











export default Mf2