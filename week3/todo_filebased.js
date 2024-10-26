import fs from 'fs';
import express from 'express';
import cors from 'cors';
const app = express();
app.use(express.json());
app.use(cors());
let todolist = [];
let count = 1;
app.post("/", function(req, res) {
    let todo = req.body.todo;
    todolist.push({
        id: count++,
        todo: todo,
    });
    count += 1;
    fs.writeFile("todos.txt", JSON.stringify(todolist) + '\n', function(err) {
        res.json(todolist);
    });
});
app.get('/', function(req, res) {
    fs.readFile('todos.txt', 'utf8', function(err, data) {
        let parsedData = [];
        if (data && data.length > 0) {
            parsedData = JSON.parse(data);
        }
        res.json(parsedData);
    });
});
app.put('/todo', function(req, res) {
    const prev = req.body.id;
    const newTodo = req.body.todo;
    let updated = false;
    for (let i = 0; i < todolist.length; i++) {
        if (todolist[i].id === prev) {
            todolist[i].todo = newTodo;
            updated = true;
            break;
        }
    }
    if (updated) {
        fs.writeFile("todos.txt", JSON.stringify(todolist) + '\n', function(err) {
            res.json(todolist);
        });
    }
});
app.delete("/todo", function(req, res) {
    const id = req.body.id;
    todolist = todolist.filter(todo => todo.id != id);
    fs.writeFile("todos.txt", JSON.stringify(todolist) + "\n", function(err) {
        res.json(todolist);
    });
});
app.listen(3000);