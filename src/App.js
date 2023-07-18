import React, { useMemo, useState, useCallback, createContext, useContext } from 'react';
import './App.css';
import TodoForm from './TodoForm';
import DeleteButton from './DeleteButton';
import TodoDisplay from './TodoDisplay';

export const TodoContext = createContext([]);

const Title = React.memo(() => {
  console.log('Title');
  return <h1>Todo List</h1>;
});

const App = () => {
  const [todos, setTodos] = useState([]);
  const [checkedTodos, setCheckedTodos] = useState([]);

  const handleCheckTodo = (index) => {
    setCheckedTodos((pre) => [...new Set([...pre, index])]);
    // console.log(checkedTodos)
  };

  const handleAddTodo = useCallback((todo) => {
    setTodos((prev) => [...prev, todo]);
  }, []);

  const handleDeleteTodo = useCallback(() => {
    setTodos(todos.filter((todo, i) => !checkedTodos.includes(i)));
    setCheckedTodos([])
  }, [checkedTodos]);

  const MemorizedDeleteButton = useMemo(() => {
    return <DeleteButton label='Delete' handleDeleteTodo={handleDeleteTodo} />;
  }, [handleDeleteTodo]);

  const MemorizedTodoForm = useMemo(() => {
    return <TodoForm onAddTodo={handleAddTodo} />;
  }, [handleAddTodo]);

  return (
    <TodoContext.Provider value={todos}>
      <div className='App'>
        <Title />
        {MemorizedTodoForm}
        <TodoDisplay checkedTodos={checkedTodos} handleCheckTodo={handleCheckTodo} />
        {/* <DeleteButton label='Delete' handleDeleteTodo={handleDeleteTodo} /> */}
        {MemorizedDeleteButton}
      </div>
    </TodoContext.Provider>
  );
};

export default App;
