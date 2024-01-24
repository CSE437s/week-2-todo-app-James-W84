import "./Container.css";
import Input from "./Input";
import Item from "./Item";

function Container({ items, getTodos, setItems }) {
  return (
    <div id="container">
      <Input getTodos={getTodos} setItems={setItems}></Input>
      {items.map((item) => {
        return (
          <Item
            content={item.content}
            status={item.status}
            _id={item._id}
            key={item._id}
            getTodos={getTodos}
            setItems={setItems}
          ></Item>
        );
      })}
    </div>
  );
}

export default Container;
