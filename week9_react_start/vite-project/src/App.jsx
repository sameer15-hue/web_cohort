import { useState } from "react";
import './App.css';
function App(){
  const [todos,settodo]=useState([]);
  function addtodo(){
    settodo([...todos,{
      title:document.getElementById('title').value,
    }]);
  }
  return (
    <div className="App">
      <input type="text" id="title" placeholder="Enter your todo"/>
      <button onClick={addtodo}>AddTodo</button>
      {
        todos.map((item,index)=>
        <Todo key={index} title={item.title}></Todo>
      )
      }
    </div>
  )
}
function Todo(props){
  return (
    <div>
      <h1>{props.title}</h1>
    </div>
  );
}
export default App;
//{another way without passing props(without destructering) to another function in destrcturing  }
//{
//  todos.map((item, index) =>
//    <Todo key={index} title={item.title} />
//  )
//}
//</div>
//);
//}
//function Todo({ title }) {
//return (
//<div>
//<h1>{title}</h1>
//</div>
// );
// }