import React, { useState } from 'react';

function AddTodoModal({ onAddTodo, onClose }) {
  const [newTodo, setNewTodo] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!newTodo.trim() || !dueDate) {
      alert("Please fill both the details!");
      return;
    }
    const newTodoItem = {
      text: newTodo,
      completed: false,
      createdAt: new Date().toISOString(),
      dueDate: dueDate,
    };
    onAddTodo(newTodoItem);
    setNewTodo('');
    setDueDate('');
    onClose(); // Close the modal after submitting
  };

  return (
    <div className="modal">
      <div className="modal-content">
  <h2>Add New Todo</h2>
  <form onSubmit={handleSubmit}>
    <div className="input-field">
      <input
        type="text"
        value={newTodo}
        onChange={(event) => setNewTodo(event.target.value)}
        placeholder="Add new todo"
      />
    </div>
    <div className="input-field">
      <input
        type="date"
        value={dueDate}
        onChange={(event) => setDueDate(event.target.value)}
        placeholder="Due Date"
      />
    </div>
    <div className="button-container">
      <button type="submit">Add</button>
      <button onClick={onClose}>Cancel</button>
    </div>
  </form>
</div>
    </div>
  );
}

function AddTodoButton({ onAddTodo }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className='addbutton'>
      <button onClick={handleOpen}>Add New Todo</button>
      {isOpen && <AddTodoModal onAddTodo={onAddTodo} onClose={handleClose} />}
    </div>
  );
}

export default AddTodoButton;