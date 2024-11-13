//Assignment 1 (9.1)
import { useState } from 'react';
import './App.css';

function Todo(props) {
  return (
    <div >
      <h1>{props.title}</h1>
      <button onClick={()=>props.onupdate(props.title)}>update</button>
      <button onClick={()=>props.ondelete(props.title)}>delete</button>
    </div>
  );
}

function Sample() {
  const [todos, settodo] = useState([]);
  function addtodo() {
    console.log('addtodo entered');
    settodo([
      ...todos,
      {
        title: document.getElementById('title').value,
      },
    ]);
  }
  function updatetodo(title) {
    const newtodo = document.getElementById('newtodo').value;
    settodo(function () {
      return (
        todos.map((item) => {
        if (item.title ===title) {
          return {...item,title:newtodo};
        }
        return item;
      }));
    });
    return(
      <div>
        {/* <label id='newtodo'>enter newtodo!!</label> */}
        <input type='text' id='newtodo' placeholder=' enter newtodo'></input>
      </div>
    )
  }
  function deletetodo(title){
    settodo(function (){
      return todos.filter((item)=>{
        if (item.title!==title){
          return item;
        }
      })
    })
  }
  return (
    <div className="App">
      <h1> Todo App </h1>
      <input type="text" id="title" placeholder="Enter your todo" />
      <button onClick={addtodo}>AddTodo</button>
      {todos.map((item, index) => (
        <Todo  key={item.title}  index={index} title={item.title} onupdate={updatetodo} ondelete={deletetodo}></Todo>
      ))}
    </div>
  );
}

export default Sample;