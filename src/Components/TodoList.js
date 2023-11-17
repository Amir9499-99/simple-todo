import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, onToggle }) => (
  <ul>
    {todos.map(todo => (
      <TodoItem key={todo.id} todo={todo} onToggle={onToggle} />
    ))}
  </ul>
);

export default TodoList;