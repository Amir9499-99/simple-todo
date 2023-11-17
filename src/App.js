import React, { useState } from 'react';
import TodoList from './Components/TodoList';
import AddTodoForm from './Components/AddTodoForm';

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Mornin Exercise', completed: true },
    { id: 2, text: 'Drink Coffee', completed: true },
    { id: 3, text: 'Check Emails', completed: false },
    { id: 4, text: 'Attend standup meeting', completed: false }
  ]);

  const toggleTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const addTodo = (text) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: prevTodos.length + 1, text, completed: false },
    ]);
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">React Todo App</h1>
      <TodoList todos={todos} onToggle={toggleTodo} />
      <AddTodoForm onAdd={addTodo} />
    </div>
  );
};

export default App;
