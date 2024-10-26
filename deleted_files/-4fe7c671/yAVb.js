import express from 'express';
const app=express();
app.use(express.json());
const input=document.getElementById("taskinput").value();
const tasks=document.getElementById("tasks");
function addtask(){
  if input!=''{
    const li=document.createElement('li');
    li.textContent=input;
    tasks.append(li);
  }
}