import { useState } from "react";

function Countclick(){
    const[count,setCount]=useState(0);
    function counter(){
setCount=count+1;
/* count=setCount; */
    }
    return(
        <>
        <p>count is:{count}</p>
        <button onClick={counter}>Click To count</button>
        </>
    )
}
export default Countclick;