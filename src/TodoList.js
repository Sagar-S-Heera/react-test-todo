import React, { memo, useState, useCallback } from 'react';

const TodoList = memo(({ tasks, deleteTask }) => {
  const [selectedTasks, setSelectedTasks] = useState([]);

  const handleCheckboxChange = useCallback((index) => {
    setSelectedTasks((prevSelectedTasks) => {
      if (prevSelectedTasks.includes(index)) {
        return prevSelectedTasks.filter((taskIndex) => taskIndex !== index);
      } else {
        return [...prevSelectedTasks, index];
      }
    });
  }, []);

  const handleDeleteSelected = useCallback(() => {
    deleteTask(selectedTasks);
    setSelectedTasks([]);
  }, [deleteTask, selectedTasks]);

  console.log("render-list");

  return (
    <div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <label>
              <input
                type="checkbox"
                checked={selectedTasks.includes(index)}
                onChange={() => handleCheckboxChange(index)}
              />
              {task}
            </label>
          </li>
        ))}
      </ul>
      <button onClick={handleDeleteSelected}>Delete Selected Tasks</button>
    </div>
  );
});

export default TodoList;