import React, { useContext } from 'react';
import classes from './TodoDisplay.module.css';
import { TodoContext } from './App';

const TodoDisplay = ({ checkedTodos, handleCheckTodo }) => {
  const todos = useContext(TodoContext);

  console.log('Todo display');

  return (
    <div className={classes.display}>
      <ol>
        {todos.map((todo, index) => (
          <p key={index}>
            {todo}
            <input
              type='checkbox'
              checked={checkedTodos.includes(index)}
              onChange={() => handleCheckTodo(index)}
            />
          </p>
        ))}
      </ol>
    </div>
  );
};

export default TodoDisplay;
