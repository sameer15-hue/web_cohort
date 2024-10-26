import { useState,useEffect } from "react";
import useprev from "./useprev";
import "./App.css";
function App2(){
    const [count,setcount]=useState(0);
    const prev=useprev(count);
    function handle(){
        setcount(count+1);
    }
    return(
        <div className="App">
            <h1>Count:{count}</h1>
            <button onClick={handle}>increase</button>
            <h2> previous count:{prev}</h2>
        </div>
    )
}
export default App2;