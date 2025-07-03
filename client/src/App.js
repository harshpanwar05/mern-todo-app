import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const getTodos = async () => {
    const res = await axios.get(process.env.REACT_APP_BACKEND_URL + "/api/todos");
    setTodos(res.data);
  };

  const addTodo = async () => {
    if (!input.trim()) return;
    await axios.post(process.env.REACT_APP_BACKEND_URL + "/api/todos", { text: input });
    setInput("");
    getTodos();
  };

  const deleteTodo = async (id) => {
    await axios.delete(process.env.REACT_APP_BACKEND_URL + "/api/todos/" + id);
    getTodos();
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div>
      <h1>Todo List</h1>
      <input value={input} onChange={e => setInput(e.target.value)} />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map(todo => (
          <li key={todo._id}>{todo.text}
            <button onClick={() => deleteTodo(todo._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;