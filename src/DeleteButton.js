import React from 'react';

const DeleteButton = ({ handleDeleteTodo }) => {
  console.log("render-delete");
  return (
    <button style={{ marginTop: '1rem' }} onClick={handleDeleteTodo}>
      Delete Task
    </button>
  );
};

const areEqual = (prevProps, nextProps) => {
  // Only re-render if the onDeleteCheckedTodos prop changes
  return prevProps.handleDeleteTodo === nextProps.handleDeleteTodo;
};

export default React.memo(DeleteButton, areEqual);