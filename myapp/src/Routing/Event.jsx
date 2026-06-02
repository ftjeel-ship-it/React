import react from 'react'

function Event(){
    const arr = [1,2,3,4,5]

    let submit = (e) =>{
        e.preventDefault();
        alert(document.getElementById('uname').value)
    }
    let one = ()=>{
        document.getElementById('test1').innerHTML = 'You clicked once'
    }
    let double = ()=>{
        document.getElementById('test1').innerHTML = 'You double clicked'
    }
    let change = (e)=>{
        document.getElementById('test1').innerHTML = e.target.value
    }

    return (
        <div>
            <form action="" onSubmit={submit}>
                <textarea name="" id="uname" onChange={change}></textarea>
                <input type="submit" value="submit"/>
            </form>
            <button onClick={one} onDoubleClick={double}>Click</button>
            <p id="test1"></p>
        </div>
    )
}
export default Event