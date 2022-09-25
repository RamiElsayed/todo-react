import { useState } from "react";
import DatePicker from "react-datepicker";
import { v4 as uuidv4 } from "uuid";

import "react-datepicker/dist/react-datepicker.css";

export const TodoForm = ({ setTodos }) => {
  const [title, setTitle] = useState("");
  const [content, setcontent] = useState("");
  const [dueDate, setdueDate] = useState(Date.now());

  const onSubmit = (event) => {
    event.preventDefault();
    const todosFromLS = JSON.parse(localStorage.getItem("todoItems")) || [];
    const newTodos = [
      ...todosFromLS,
      {
        id: uuidv4(),
        title,
        content,
        dueDate,
      },
    ];
    setTodos(newTodos);
    localStorage.setItem("todoItems", JSON.stringify(newTodos));
  };

  console.log(title, content);
  return (
    <section className="container">
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            id="title"
            placeholder="Title"
            onChange={(event) => {
              setTitle(event.currentTarget.value);
            }}
          />
        </div>
        <div className="mb-3">
          <textarea
            className="form-control"
            placeholder="Add some details"
            id="content"
            onChange={(event) => {
              setcontent(event.currentTarget.value);
            }}
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="dueDate" className="form-label">
            Due Date
          </label>
          <DatePicker
            id="dueDate"
            selected={dueDate}
            onChange={(date) => {
              setdueDate(date);
            }}
            dateFormat="dd/MM/yyy"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </section>
  );
};
