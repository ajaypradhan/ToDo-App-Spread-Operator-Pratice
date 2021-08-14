import React, { useState } from "react";

function App() {
  const [inputTodo, setInputTodo] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputTodo(newValue);
  }

  function addTodo() {
    setItems((prevValue) => {
      return [...prevValue, inputTodo];
    });
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputTodo} />
        <button onClick={addTodo}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoItem) => {
            return <li>{todoItem}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
