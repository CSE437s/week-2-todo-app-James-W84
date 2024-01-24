import "./App.css";
import Container from "./components/Container";
import { useState, useEffect } from "react";

function App() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    getTodos(setItems);
  }, []);

  return (
    <div className="App">
      <Container
        items={items}
        getTodos={getTodos}
        setItems={setItems}
      ></Container>
    </div>
  );
}

function getTodos(setItems) {
  fetch("http://localhost:5000/todos")
    .then((response) => response.json())
    .then((data) => {
      setItems(data);
    });
}

export default App;
