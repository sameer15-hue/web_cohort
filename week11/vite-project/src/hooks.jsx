import React, { useState, useEffect, useCallback, useMemo, memo } from 'react';
const TodoItem = memo(({ todo, onToggle }) => {
  return (
    <div>
      <input type="checkbox" checked={todo.completed} onChange={() => onToggle(todo.id)}/>
      <span>{todo.text}</span>
    </div>
  );
});

const TodoApp = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build project', completed: false }
  ]);
  const [newTodo, setNewTodo] = useState('');
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleToggle = useCallback((todoId) => {
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }, []);

  const filteredTodos = useMemo(() => {
    switch (filter) {
      case 'active': return todos.filter(todo => !todo.completed);
      case 'completed': return todos.filter(todo => todo.completed);
      default: return todos;
    }
  }, [todos, filter]);

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (!newTodo.trim()) return;
    setTodos(prevTodos => [...prevTodos, {
      id: Date.now(),
      text: newTodo.trim(),
      completed: false
    }]);
    setNewTodo('');
  };

  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={handleAddTodo}>
        <input type="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} placeholder="Add todo"/>
        <button type="submit">Add</button>
      </form>
      <div>
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('active')}>Active</button>
        <button onClick={() => setFilter('completed')}>Completed</button>
      </div>
      <div>
        {filteredTodos.map(todo => (
          <TodoItem key={todo.id} todo={todo} onToggle={handleToggle}/>
        ))}
      </div>
      <div>Total: {todos.length} | Completed: {todos.filter(t => t.completed).length}</div>
    </div>
  );
};

export default TodoApp;