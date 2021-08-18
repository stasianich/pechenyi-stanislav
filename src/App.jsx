import React, { useEffect, useState } from 'react';
import { getTodos } from './api/request';
import { AddTodoForm } from './components/AddTodoForm';
import { TodoList } from './components/TodoList';
import './App.scss';

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (
    userId,
    title,
    completed,
  ) => {
    const newTodo = {
      userId: +userId,
      id: (todos.length + 1),
      title,
      completed,
    };

    setTodos([newTodo, ...todos]);
  };

  const deleteTodo = (id) => {
    const preparedTodos = todos.filter(todo => todo.id !== id);

    setTodos(preparedTodos);
  };

  useEffect(() => {
    (async() => setTodos(await getTodos()))();
  }, []);

  return (
    <div className="App">
      <AddTodoForm onAdd={addTodo} />
      <TodoList
        todos={todos}
        onDelete={deleteTodo}
      />
    </div>
  );
};

export default App;
