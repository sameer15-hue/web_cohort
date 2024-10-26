import { useState,useEffect } from "react";
function App2(){
    console.log("App2 called!!");
    const [visible,setvisible]=useState(true);
    const [count,setcount]=useState(0);
    useEffect(function(){
        console.log("useEffect visible called!!");
        setInterval(function(){
            setvisible(visible=>!visible);
        },5000)
    },[]);
    return (
        <div> 
            <h1>React hooks</h1>
            {visible&&<Counter count={count}  handle={setcount} visible={visible}/>}
        </div>
    );
}
function Counter({count,handle,visible}){
    console.log("counter entered");
    let clock=useEffect(function(){
        console.log("useEffect interval called!!");
        setInterval(function (count){
            handle(count=>count+1)},1000);
     return function(){
        console.log("clear intervall!!!");
        clearInterval(clock);
     }
    },[visible]);
    return (
        <div>
            <h1>{count}</h1>
        </div>
    )
}
export default App2;