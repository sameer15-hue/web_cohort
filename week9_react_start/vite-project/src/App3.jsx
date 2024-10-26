    //dependency array and cleanups(just cleaning xurrent state or variable value and rerendering it )
import { useState,useEffect } from "react";
function App3(){
    const [count,setcount]=useState(0);
    const [count2,setcount2]=useState(0);
    function increase(){
        setcount(count+1);
    }
    function decrease(){
        setcount2(count2-1);
    }
    return(
        <div>
            <Counter count={count} count2={count2}/>
            <button onClick={increase}>increase</button>
            <button onClick={decrease}>decrease</button>
        </div>
    )
}
function Counter(props){
    useEffect(function(){
        console.log("mounted");
        return function(){
            console.log("unmounted");}
    },[]);
    useEffect(function(){
        console.log("count1 changed");
        return function(){
            console.log("cleanup");
        }
    },[props.count]);
    return(
        <div>
            Counter1 <p>{props.count}</p><br/>
            Counter2 <p>{props.count2}</p>
        </div>
    )
}
export default App3;