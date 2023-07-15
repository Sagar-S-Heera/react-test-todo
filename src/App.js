import React, { useMemo, useState, useCallback } from 'react';
import "./App.css";
import TodoForm from './TodoForm';
import DeleteButton from './DeleteButton';
import TodoDisplay from './TodoDisplay';

const Title = React.memo(() => {
  console.log('Title')
  return(
    <h1>Todo List</h1>
  )
})

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
  
  const handleAddTodo = useCallback((todo) => {
    setTodos((prev)=>[...prev, todo]);
  },[]);



  const handleDeleteTodo = useCallback(() => {
    console.log('handle delete')
  },[]);


  console.log("App render");


  const MemorizedTodoForm = useMemo(()=>{
    return(
      <TodoForm onAddTodo={handleAddTodo} />
    )
  },[handleAddTodo])

  return (
    <div className='App'>
      <Title/>
      {MemorizedTodoForm}
      <TodoDisplay todos={todos} checkedTodos={checkedTodos} handleCheckTodo={handleCheckTodo} />
      <DeleteButton handleDeleteTodo={handleDeleteTodo} />
    </div>
  );
};

export default App;
