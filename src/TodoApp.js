
import React, { useState, useCallback } from 'react';
import TodoList from './TodoList';

const TodoApp = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleInputChange = useCallback((event) => {
    setTask(event.target.value);
  }, []);

  const handleAddTask = useCallback(() => {
    if (task.trim() !== '') {
      setTasks((prevTasks) => [...prevTasks, task]);
      setTask('');
    }
  }, [task]);

  const handleDeleteTask = useCallback((indices) => {
    setTasks((prevTasks) =>
      prevTasks.filter((_, index) => !indices.includes(index))
    );
  }, []);

  console.log("render-app");

  return (
    <div className="todoListMain">
      <h1>Todo App</h1>
      <div className="header">
        <input
          type="text"
          placeholder="Enter task"
          value={task}
          onChange={handleInputChange}
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
      <TodoList tasks={tasks} deleteTask={handleDeleteTask} />
    </div>
  );
};

export default TodoApp;