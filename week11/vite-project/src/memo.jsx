import { useState,useEffect,memo } from "react";
import './App.css';
function Memo(){
    return (
        <div>
            <Counter/>
        </div>
    )
}
function Counter(){
    const [count, setCount] = useState(0);
    return(
        <>
        <Currentcount /><br/>
        <Increase />
        <Decrease/>
        </>
    )
}
const Currentcount=memo(function (){
    return (
        <div>
            <p>Count: {count}</p>
        </div>
    )
})
const Increase=memo(function(){
    return (
        <button onClick={() => setCount((x)=>x+2)}>Increase</button>  
    )
})
const Decrease=memo(function(){
    return (
        <button onClick={() => setCount((x)=>x-1)}>Decrease</button>
    )
})
function Iseven(){

}
export default Memo;
//memo(builtin component) lets you skip re-renders if there is no change in props of child component
// for example if parent component has child1(name) and child2(roll) then if name changed then no re-render in child2 component