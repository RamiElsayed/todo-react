import { Header } from "./components/Header";
import { TodoForm } from "./components/TodoForm";
import { Todos } from "./components/Todos";

export const App = () => {
  const onsubmit = () => {
    console.log("submit");
  };
  return (
    <div>
      <Header title="My toDo Items" todoCount={10} />
      <TodoForm onsubmit={onsubmit} />
      <Todos />
    </div>
  );
};
