import React, { useState } from "react";

import { Header } from "./components/Header";
import { TodoForm } from "./components/TodoForm";
import { Todos } from "./components/Todos";

export const AppContext = React.createContext();
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
      <AppContext.Provider
        value={{
          setTodos,
        }}
      >
        <TodoForm />
        <Todos
          todos={JSON.parse(localStorage.getItem("todoItems")) || []}
          onDelete={onDelete}
        />
      </AppContext.Provider>
    </div>
  );
};
