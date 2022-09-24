import { Header } from "./components/Header";
import { TodoForm } from "./components/TodoForm";
import { Todos } from "./components/Todos";

const todos = [
  {
    id: "1",
    title: "item 1",
    content: "This is items 1",
    dueDate: Date.now(),
  },
  {
    id: "2",
    title: "item 2",
    content: "This is items 2",
    dueDate: Date.now(),
  },
  {
    id: "3",
    title: "item 3",
    content: "This is items 3",
    dueDate: Date.now(),
  },
  {
    id: "4",
    title: "item 4",
    content: "This is items 4",
    dueDate: Date.now(),
  },
];
export const App = () => {
  const onSubmit = (event) => {
    event.preventDefault();
    console.log("submit");
  };
  const onComplete = (event) => {
    console.log("onComplete");
  };
  const onDelete = (event) => {
    console.log("onDelete");
  };
  return (
    <div>
      <Header title="My toDo Items" todoCount={10} />
      <TodoForm onsubmit={onSubmit} />
      <Todos todos={todos} onComplete={onComplete} onDelete={onDelete} />
    </div>
  );
};
