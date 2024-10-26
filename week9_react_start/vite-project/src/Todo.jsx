//Assignment 1 (9.1)
import { useState } from "react";
import './App.css';
function Todo(){
   const [todos,settodo]=useState([]);
   const [updation,setupdate]=useState('');
   const [deletion,setdelete]=useState('');
   function addtodo(){
    console.log("addtodo entered");
    settodo([...todos,{
      title:document.getElementById('title').value,
    }]);
  }
  function deletetodo(deletion){
    setdelete(function(){
        return todos.filter((todo)=>todo.id!=deletion);
    })
  }
  function updatetodo(props){
    console.log(props);
    let oldtodo=props.title;
    console.log(oldtodo);
    const newtodo=prompt('enter new todo!!');
    setupdate(function(oldtodo){
        console.log('enter');
        return todos.map((item)=>{
            console.log(item,oldtodo)
            if(item===oldtodo){
            return props.title;
        }return item;
    });
    });
  }
  
  return (
    <div className="App">
      <input type="text" id="title" placeholder="Enter your todo"/>
      <button onClick={addtodo}>AddTodo</button>
        {
        todos.map((item,index)=>
        <Todos key={index} title={item.title} ></Todos>)
        }
    </div>
  )
}
function Todos(props){
    function steptoupdate()
    return (
      <div>
        <h1>{props.title}</h1>
        <button onClick={updatetodo}>update</button>
        <updatetodo title={props.title}> </updatetodo>
      </div>
    );
  }
export default Todo;