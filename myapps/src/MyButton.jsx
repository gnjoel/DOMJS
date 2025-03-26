import { useState } from "react";
function MyButton(){
    const[count,setCount]=useState(0);
    function clickme(){
        alert('you clicked Me!');
setCount(count+1);
    }
    return(
        <>
        <button className="clickb" onClick={clickme}>ClickMe {count} times</button>
        <p className="p1"></p>
        </>
    )
}
export default MyButton;