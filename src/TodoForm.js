import React from 'react';

const TodoForm = ({ onAddTodo }) => {
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const inputValue = event.target.elements.todoInput.value;
      onAddTodo(inputValue);
      event.target.reset();
  };
  console.log("render-todoform")
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="todoInput" placeholder="Enter a task" required />
      <button style={{marginLeft:'1rem'}}type="submit">Add Task</button>
    </form>
  );
};

export default React.memo(TodoForm);
