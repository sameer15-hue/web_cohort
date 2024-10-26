import express from 'express';
import fs from 'fs';
const app = express();
let todo = {};

// Read data from the file and handle errors
function readData() {
    fs.readFile("todo.json", "utf-8", (err, data) => {
        if (err) {
            console.error("Error reading file:", err);
            todo = {}; // Initialize as empty if there is an error
            return;
        }
        try {
            todo = JSON.parse(data);
        } catch (e) {
            console.error("Error parsing JSON:", e);
            todo = {}; // Initialize as empty if JSON is invalid
        }
    });
}

// Write data to the file and handle errors
function writeData() {
    fs.writeFile("todo.json", JSON.stringify(todo, null, 2), "utf-8", (err) => {
        if (err) {
            console.error("Error writing file:", err);
        }
    });
}

readData();

app.post('/create-todo', function(req, res) {
    let user = req.query.user;
    let list = req.query.list;
    if (!user || !list) {
        return res.status(400).send("User and list are required");
    }
    
    user = user.replace(/^"|"$/g, '');
    list = list.replace(/^"|"$/g, '');

    if (!todo[user]) {
        todo[user] = [];
    }

    todo[user].push({
        title: list
    });
    writeData();
    res.send("Adding a todo");
});

app.get('/show', function(req, res) {
    let user = req.query.user;
    if (!user) {
        return res.status(400).send("User is required");
    }
    
    user = user.replace(/^"|"$/g, '');

    if (todo[user]) {
        const titles = todo[user].map(items => items.title);
        res.json({
            list: titles
        });
    } else {
        res.json({
            list: []
        });
    }
});

app.delete('/delete', function(req, res) {
    let user = req.query.user;
    const deleteList = parseInt(req.query.deleteList);
    if (!user || isNaN(deleteList)) {
        return res.status(400).send("User and deleteList index are required");
    }
    
    user = user.replace(/^"|"$/g, '');

    if (todo[user] && deleteList >= 0 && deleteList < todo[user].length) {
        todo[user].splice(deleteList, 1);
        writeData();
        res.json({
            list: todo[user]
        });
    } else {
        res.status(400).send("Invalid delete index or user does not exist");
    }
});

app.put('/update', function(req, res) {
    let user = req.query.user;
    const updateList = parseInt(req.query.updateList);
    let data = req.query.data;
    if (!user || isNaN(updateList) || !data) {
        return res.status(400).send("User, updateList index, and data are required");
    }

    user = user.replace(/^"|"$/g, '');
    data = data.replace(/^"|"$/g, '');

    if (todo[user] && updateList >= 0 && updateList < todo[user].length) {
        todo[user][updateList].title = data;
        writeData();
        res.json({
            list: todo[user]
        });
    } else {
        res.status(400).send("Invalid update index or user does not exist");
    }
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
