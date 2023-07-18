import React from 'react';
// import { TodoContext } from './App';

const DeleteButton = ({ label, handleDeleteTodo }) => {
  // const todos = React.useContext(TodoContext);
  console.log('render-delete');
  return (
    <button style={{ marginTop: '1rem' }} onClick={handleDeleteTodo}>
      {label}
    </button>
  );
};

export default React.memo(DeleteButton);
