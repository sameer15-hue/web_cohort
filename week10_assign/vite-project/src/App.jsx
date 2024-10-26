//usefetch (custom hook)
import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios';
function useFetch(url){
    const[data,setdata]=useState(null);
    const [loading,setloading]=useState(true);
    useEffect(function(){
        async function fetchdata(){ 
        setloading(true);
        //console.log(loading);
        const response=await axios.get(url);
        setdata(response.data);
        setloading(false);
        }
        fetchdata();
    },[url]);
    return {data,loading};
}
function App() {
    const {data,loading}=useFetch('https://jsonplaceholder.typicode.com/posts/1');
    console.log(loading);
    if (loading){
        return <div>
            <h2>loading </h2>
        </div>
    }
    return (
        <div>
            <h1>{data.title}</h1>
        </div>
    )
}

export default App;
