import { useState,useEffect } from "react";
function Counter(){
    const [count,setCount]=useState(function(){
        const x=localStorage.getItem('count');
        if (x){
            return parseInt(x);
        }return 0;
    });
    useEffect(function setting(){
        console.log('setting entered');
        localStorage.setItem('count',count);
    },[count])
    function update(){
        setCount(count+1);
    }
    return(
        <div>
            <h1> count:{count} </h1>
            <button onClick={update}>update</button>
        </div>
    )
}
export default Counter;