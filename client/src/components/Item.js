import "./Item.css";
import classNames from "classnames";

function Item({ content, status, _id, getTodos, setItems }) {
  const combinedClasses = classNames("item", status);
  return (
    <div className={combinedClasses}>
      <p>{content}</p>
      <button
        className="toggle"
        onClick={() => {
          changeStatus(_id, status, getTodos, setItems);
        }}
      ></button>
    </div>
  );
}

function changeStatus(_id, status, getTodos, setItems) {
  fetch("http://localhost:5000/changestatus", {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      _id: _id,
      newStatus: status == "open" ? "closed" : "open",
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      getTodos(setItems);
    });
}

export default Item;
