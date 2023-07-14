import React from 'react';

const DeleteButton = ({ onDeleteCheckedTodos }) => {
  console.log("render-delte")
  return (
    <button onClick={onDeleteCheckedTodos}>
      Delete Task
    </button>
  );
};

export default DeleteButton;
