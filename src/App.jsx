import React from "react";
import ReactDOM from "react-dom/client";
import "./app.css";
import { useState } from "react";



const App = () => {
  const [text, setText] = useState("");
  const [items, setItems] = useState([]);
  const handleDeleteTodo =(id) => {
    const filteredTodos = items.filter((todo) => todo.id !== id);
    setItems(filteredTodos);
  };
  return (
    <>
      {/* <div className="word">
    <i class="fa-solid fa-circle-xmark"></i>
            <p>bjskjdbsd</p>
    </div> */}
      <div className="box">
        <input
          type="text"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <button
          onClick={() => {
            setItems((oldItems) => {
              return [...oldItems,  { id: oldItems.length + 1, text: text }];
            });
            setText("");
          }}
        >
          ADD
        </button>
      </div>
      <div className="container">
        <ul>
          {items.map((item, index) => {
            return (
              <div className="word" key={index}>
                <i
                  className="fa-solid fa-circle-xmark"
                  onClick={() =>handleDeleteTodo(item.id) }
                ></i>
                <li> {item.text}</li>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
