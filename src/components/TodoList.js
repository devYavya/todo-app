import React from 'react';

function TodoList({ todoList, onToggleCompleted, onDeleteTask }) {
  const completedTasks = todoList.filter((todo) => todo.completed);
  const tasksLeft = todoList.filter((todo) => !todo.completed);

  return (
    <div className="todo-list-container">
      <div className="card">
        <h2>Tasks Left</h2>
        <ul>
          {tasksLeft.map((todo) => (
            <li key={todo.id}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => onToggleCompleted(todo.id)}
              />
              <span>{todo.text}</span>
              <span>Due: {new Date(todo.dueDate).toLocaleDateString()}</span>
              <button onClick={() => onDeleteTask(todo.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
      <div className="card">
        <h2>Completed Tasks</h2>
        <ul>
          {completedTasks.map((todo) => (
            <li key={todo.id}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => onToggleCompleted(todo.id)}
              />
              <span>{todo.text}</span>
              <span>Due: {new Date(todo.dueDate).toLocaleDateString()}</span>
              <button onClick={() => onDeleteTask(todo.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoList;