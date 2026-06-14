import './Comp1.css'
import img from './assets/hero.png'

function Comp1(){
    const date = new Date().toLocaleDateString()
    return(
        

        <div>
            

        {/* <h1 style={{color:'blue',fontSize:'24 px'}}>Flowers</h1>
        <br /><br /> */}
        {/* <ol start={'A'} type="A" style={{color : 'red'}}>
            <li>Rose🌹🌹🌹</li>
            <li>Rose🌹🌹</li>
            <li>Rose🌹</li>
            <li>Lose💔</li>
        </ol> */}

       {/* <>
        <h1 className="jeel">H1</h1>
        <p>Everyone</p>
        </>
        <>
        name = "ram"
        <h1>{name}</h1>
        </>*/}
        
        <img src={img} alt=".." />
        <h2>{date}</h2>
        <p>{date}</p>
        <h2>{new Date().toTimeString()}</h2>
        <p>{new Date().toTimeString()}</p>
        </div>

    )
}
export default Comp1

/*?  write react code to render a component with the following data a heading in italic blue color and font size 25 px ?
 2) an order list of 3 flowers numbering starts with capital a list should be in red color */


/*
1) render an image hero.png which available in asset folder
2) a para in green color and font size 20 px use external css for para display current time and current date in purple color and it should be center
align 
*/