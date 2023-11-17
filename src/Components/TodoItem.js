import React from 'react';

const TodoItem = ({ todo, onToggle }) => (
  <li className={`list-group-item ${todo.completed ? 'list-group-item-success' : ''}`}>
    <input
      type="checkbox"
      checked={todo.completed}
      onChange={() => onToggle(todo.id)}
      className="form-check-input me-2"
    />
    {todo.text}
  </li>
);

export default TodoItem;