import React, { useState } from 'react';

const TodoDisplay = ({ todos,checkedTodos, handleCheckTodo }) => {
  
  console.log("display-ren")
  return (
    <ol style={{height:"80px"}}>
      {todos.map((todo, index) => (
        <p key={index}>
          {todo}
          <input
            type="checkbox"
            checked={checkedTodos.includes(index)}
            onChange={()=>handleCheckTodo(index)}
          />
        </p>
      ))}
    </ol>
  );
};

export default TodoDisplay;
