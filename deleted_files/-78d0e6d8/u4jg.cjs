const express = require('express');
const fs = require('fs').promises;

const app = express();

// In-memory array to store TODO items (for demonstration purposes)
let todos = [];

// Load todos from a file if it exists
fs.readFile('todos.json', 'utf-8')
  .then(data => {
    todos = JSON.parse(data);
  })
  .catch(err => {
    console.error('Error reading todos:', err);
  });

// Get all TODO items
app.get('/todos', (req, res) => {
  res.json(todos);
});

// Get a specific TODO item by ID
app.get('/todos/:id', (req, res) => {
  const todo = todos.find(t => t.id === req.params.id);
  if (!todo) {
    return res.status(404).json({ error: 'Todo not found' });
  }
  res.json(todo);
});

// Create a new TODO item
app.post('/todos', (req, res) => {
  const { title, description } = req.query;
  if (!title || !description) {
    return res.status(400).json({ error: 'Title and description are required' });
  }

  const newTodo = {
    id: todos.length + 1, // Assign a simple sequential ID
    title,
    description,
    completed: false
  };

  todos.push(newTodo);
  saveTodos();
  res.status(201).json(newTodo);
});

// Update an existing TODO item by ID
app.put('/todos/:id', (req, res) => {
  const todo = todos.find(t => t.id === req.params.id);
  if (!todo) {
    return res.status(404).json({ error: 'Todo not found' });
  }

  const { title, description, completed } = req.query;
  if (title) todo.title = title;
  if (description) todo.description = description;
  if (completed !== undefined) todo.completed = completed;

  saveTodos();
  res.json(todo);
});

// Delete a TODO item by ID
app.delete('/todos/:id', (req, res) => {
  const todoIndex = todos.findIndex(t => t.id === req.params.id);
  if (todoIndex === -1) {
    return res.status(404).json({ error: 'Todo not found' });
  }

  todos.splice(todoIndex, 1);
  saveTodos();
  res.json({ message: 'Todo deleted' });
});

// Save todos to a file
function saveTodos() {
  fs.writeFile('todos.json', JSON.stringify(todos), err => {
    if (err) {
      console.error('Error saving todos:', err);
    }
  });
}

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});