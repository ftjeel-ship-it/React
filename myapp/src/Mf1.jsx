//? create a component that contain an array of 10 numbers multipy this by 5 and display updated value

function Mf1(){
    let a1 = [1,2,3,4,5,6,7,8,9,10]

    return(
        <div>
            <h1>Old array {a1.join(",")}</h1>
             <h2>Updated</h2>
            {
                a1.map((i,index)=>(<div key={index}>
                    <h2>{i*5}</h2>
                </div>))
            }
        </div>
    )
   
}
export default Mf1