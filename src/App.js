// App.js
import React, { useState, useEffect } from 'react';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import todoImage from './todoimg.png'; // import the image
import './App.css';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);

  useEffect(() => {
    
    const todos = [
      
    ];
    setTodoList(todos);
  }, []);

  const handleAddTodo = (newTodo) => {
    setTodoList([...todoList, newTodo]);
  };

  const handleToggleCompleted = (id) => {
    const updatedTodoList = todoList.map((todo) => {
      if (todo.id === id) {
        todo.completed =!todo.completed;
      }
      return todo;
    });
    setTodoList(updatedTodoList);
    const completedTasks = updatedTodoList.filter((todo) => todo.completed);
    setCompletedTasks(completedTasks);
  };

  const handleDeleteTask = (id) => {
    const updatedTodoList = todoList.filter((todo) => todo.id!== id);
    setTodoList(updatedTodoList);
  };

  return (
     <div >
   
    <div className='addtobtn'>
      <img src={todoImage} alt="To-Do List Image" />
  <h1>To-Do List</h1>
  <AddTodo onAddTodo={handleAddTodo} style={{ display: 'block', margin: '0 auto' }} />
  <TodoList
    todoList={todoList}
    completedTasks={completedTasks}
    onToggleCompleted={handleToggleCompleted}
    onDeleteTask={handleDeleteTask}
  />
</div>
</div>

  );
}

export default App;