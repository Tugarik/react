import "./App.css";
import { useState } from "react";

function App() {
  let item;
  const [todos, setTodos] = useState([""]);
  const inputChange = (e) => {
    console.log(e.target.value);
    item = e.target.value;
  };

  const addTodo = () => {
    setTodos([...todos, item]);
    console.log(todos);
  };

  return (
    <div className="App">
      <div className="title">To Do List</div>
      <input type="text" onChange={inputChange} placeholder="Input todo ..." />
      <button onClick={addTodo}>Add Todo</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
