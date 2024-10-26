import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';
function Sample(props) {
  return(
    <div>
      <h3>{props.id} {props.title}</h3>
      <p>{props.body}</p>
    </div>
  )
}
function App(){
  const [todo, settodo] = useState([])
  useEffect(function(){
    async function Fetching(){
      let response=await axios.get("https://jsonplaceholder.typicode.com/posts").then(response=>{
        settodo(response.data);
        console.log("good");
      }).catch(function(){
        console.log(error)
      });
    }
    Fetching();
  },[]);
  return(
    <div>
      {
        todo.map((item,index)=>
        <Sample  key={index} id={item.id} title={item.title} body ={item.body} userid={item.userId}/>)
      }
    </div>
  )
}
export default App
