import React, { useState } from 'react';

const TodoDisplay = ({ todos,checkedTodos, handleCheckTodo }) => {
  
  console.log("Todo display")
  return (
    <div style={{
      height:'40vh',
      border:'1px solid #c1c1c1',
      overflow:'hidden',
      overflowY:'scroll',
      mb:'1rem'
    }}>
      <ol>
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
    </div>
  );
};

export default React.memo(TodoDisplay);
