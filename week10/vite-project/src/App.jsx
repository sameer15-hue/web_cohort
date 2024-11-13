import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    const [count, setCount] = useState(1);
    const [timer,settimer]=useState(0);
    function start(){
        let value=setInterval(function(){
            setCount(count=>count+1)
        },1000);
        console.log(value) //setinterval will return interval id
        settimer(value);
    }
    function stop(){
        clearInterval(timer)
    }
    return(
        <div >
        <h1> {count}</h1>
        <button onClick={start}> start</button>
        <button onClick={stop}>stop</button>
        </div>
    )
}

export default App
//check useref
