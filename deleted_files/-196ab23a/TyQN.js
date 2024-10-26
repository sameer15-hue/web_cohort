import express from 'express';
import fs from 'fs';
const app = express();
let todo = {};

function readData(){
    fs.readFile("todo.json","utf-8",(err,data)=>{
        todo = JSON.parse(data);
    })
}
function writeData(){
    fs.writeFile("todo.json",JSON.stringify(todo,null,2),"utf-8",(err)=>{})
}

readData();

app.post('/create-todo',function(req,res){
    let user = req.query.user;
    let list = req.query.list;
    list = list.replace(/^"|"$/g, '');
    user = user.replace(/^"|"$/g, '');

    if(!todo[user]){
        todo[user] = [];
    }

    todo[user].push({
        title:list
    })
    writeData();
    res.send("adding a todo")
})

app.get('/show',function(req,res){
    let user = req.query.user;
    user = user.replace(/^"|"$/g, '');

    if(todo[user]){
        const titles = todo[user].map(items => items.title);
        res.json({
            list:titles
        });
    }else{
        res.json({
            list:[]
        });
    }

})

app.delete('/delete',function(req,res){
    let user = req.query.user;
    user = user.replace(/^"|"$/g, '');
    const deleteList = parseInt(req.query.deleteList);

    todo[user].splice(deleteList,1);
    writeData();
    res.json({
        list:todo[user]
    })
})

app.put('/update',function(req,res){
    let user = req.query.user;
    user = user.replace(/^"|"$/g, '');
    const updateList = parseInt(req.query.updateList);
    let data = req.query.data;
    data = data.replace(/^"|"$/g, '');

    todo[user][updateList].title = data;
    writeData();
    res.json({
        list:todo[user]
    })
})

app.listen(3000,(req,res)=>{
    console.log("Server is running on port 3000");
});