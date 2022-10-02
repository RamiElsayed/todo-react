import React, { useState } from "react";

import { Header } from "./components/Header";
import { TodoForm } from "./components/TodoForm";
import { Todos } from "./components/Todos";

export const SetTodoContext = React.createContext();
export const App = () => {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todoItems")) || []
  );
  const onDelete = (event) => {
    const todosFromLS = JSON.parse(localStorage.getItem("todoItems")) || [];
    const newTodos = todosFromLS.filter((todo) => {
      return todo.id !== event.currentTarget.id;
    });
    setTodos(newTodos);
    localStorage.setItem("todoItems", JSON.stringify(newTodos));
  };
  return (
    <div>
      <Header title="My toDo Items" todoCount={todos.length} />
      <SetTodoContext.Provider
        value={{
          setTodos,
          todos,
          onDelete,
        }}
      >
        <TodoForm />
        <Todos />
      </SetTodoContext.Provider>
    </div>
  );
};
