import fs from 'fs';
import express from 'express';
const app=express()

const ToDoFile="todo_server.json" //file for storing tasks

app.use(express.json())

(async () => {
    try {
        let todoData;
        try {
            todoData = await fs.readFile(ToDoFile, "utf-8");
        } catch (err) {
            if (err.code=="ENOENT"){
                todoData="[]"
            }else{
                throw err
            }
        }
        try{
            JSON.parse(todoData)
        }catch(err){
            await fs.writeFile(ToDoFile, JSON.stringify([]))
        }
    } catch (err) {
        console.error("Error during initialization:", err);
    }
})();

//listing Tasks
app.get("/tasks", async(req, res)=>{
    try{
        const data=await fs.readFile(ToDoFile, "utf-8")
        const todoData=JSON.parse(data)
        res.json(todoData)
    }catch(err){
        res.json({
            msg:"Tasks Not Found"
        })
    }
})

//addding tasks
app.post("/tasks", async(req, res)=>{
    const todo=req.body
    console.log(req.body)
    try{
        const data=await fs.readFile(ToDoFile, "utf-8")
        const todoData=JSON.parse(data)
        todoData.push(todo)
        await fs.writeFile(ToDoFile, JSON.stringify(todoData))
        res.json({
            msg: "Added Successfully"
        })
    
    }catch(err){
        res.json({
            msg: "Error Adding Task"
        })
    }
})

//updating tasks as done
app.put("/tasks/:id", async(req, res)=>{
    const todoId=req.params.id
    const updatedtodo=req.body
    try{
        const data=await fs.readFile(ToDoFile, "utf-8")
        let todoData=JSON.parse(data)
        todoData=todoData.map(task=>task.id==todoId ? {...task, ...updatedtodo}: task)
        await fs.writeFile(ToDoFile, JSON.stringify(todoData))
        res.json({
            msg:"Updated Successfully"
        })

    }catch(err){
        res.json({
            msg:"Error Updating tasks"
        })
    }
})

//deleting tasks
app.delete("/tasks/:id", async(req, res)=>{
    const todoId=req.params.id
    try{
        const data=await fs.readFile(ToDoFile, "utf-8")
        let todoData=JSON.parse(data)
        const pos=todoData.map(i=>i.id).indexOf(todoId)
        todoData.splice(pos, 1)
        await fs.writeFile(ToDoFile, JSON.stringify(todoData))
        res.json({
            msg:"Deleted Successfuly"
        })
        
    }catch(err){
        res.json({
            msg:"Error Deleting Tasks"
        })
    }
})

app.listen(3000)