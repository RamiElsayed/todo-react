import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { Header } from "./components/Header";
import { TodoForm } from "./components/TodoForm";
import { Todos } from "./components/Todos";

export const App = () => {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todoItems")) || []
  );
  const onComplete = (event) => {
    console.log("onComplete");
  };
  const onDelete = (event) => {
    console.log("onDelete");
  };
  return (
    <div>
      <Header title="My toDo Items" todoCount={10} />
      <TodoForm setTodos={setTodos} />
      <Todos
        todos={JSON.parse(localStorage.getItem("todoItems")) || []}
        onComplete={onComplete}
        onDelete={onDelete}
      />
    </div>
  );
};
