import React, { useState, useCallback } from 'react';

const TodoForm = ({ onAddTodo }) => {
  const [task, setTask] = useState('');

  const handleChange = useCallback((event) => {
    setTask(event.target.value);
  }, []);

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
      if (task.trim() !== '') {
        onAddTodo(task);
        setTask('');
      }
    },
    [onAddTodo, task]
  );

  console.log("render-todoform");

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter task"
        value={task}
        onChange={handleChange}
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TodoForm;
