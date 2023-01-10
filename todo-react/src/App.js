import "./App.css";
import { useState } from "react";

function App() {
  let item;
  const [todos, setTodos] = useState([]);

  const inputChange = (e) => {
    item = e.target.value;
    console.log(item);
  };

  const addTodo = () => {
    if (item != "") {
      setTodos([...todos, item]);
    } else {
      setTodos(todos);
    }
  };

  const removeItem = (n) => {
    todos.splice(n, 1);
    setTodos([...todos]);
  };
  return (
    <div className="App">
      <h1 className="title">To Do List</h1>
      <input type="text" onChange={inputChange} placeholder="Input todo ..." />
      <button onClick={addTodo}>Add Todo</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index} id={index}>
            <div className="todoItem">
              <div>{todo}</div>
              <div>
                <button onClick={() => removeItem(index)}>Delete</button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
