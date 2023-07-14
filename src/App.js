import React, { useState } from 'react';
import "./App.css";
import TodoForm from './TodoForm';
import DeleteButton from './DeleteButton';
import TodoDisplay from './TodoDisplay';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [checkedTodos, setCheckedTodos] = useState([]);

  const handleCheckTodo = (index) => {
    setCheckedTodos((prevCheckedTodos) =>
      prevCheckedTodos.includes(index)
        ? prevCheckedTodos.filter((i) => i !== index)
        : [...prevCheckedTodos, index]
    );
  };
  const handleAddTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const handleDeleteTodo = (index) => {
    setTodos(todos.filter((i) => i !== index));
  };

  console.log("render");

  return (
    <div className='App'>
      <h1>Todo List</h1>
      <TodoForm onAddTodo={handleAddTodo} />
      <TodoDisplay todos={todos} checkedTodos={checkedTodos} handleCheckTodo={handleCheckTodo} />
      <DeleteButton />
    </div>
  );
};

export default App;
