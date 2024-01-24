import "./Input.css";
import React, { useState } from "react";

function Input({ getTodos, setItems }) {
  const [input, setInput] = useState("new todo item here");
  return (
    <div>
      <input
        type="text"
        id="input_box"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      ></input>
      <button
        id="submit"
        onClick={(e) => {
          newTodo(input, getTodos, setItems);
        }}
      >
        Add
      </button>
    </div>
  );
}

function newTodo(content, getTodos, setItems) {
  // console.log(content);
  fetch("http://localhost:5000/newtodo", {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ content: content }),
  })
    .then((response) => response.json())
    .then((data) => {
      getTodos(setItems);
    });
}

export default Input;
