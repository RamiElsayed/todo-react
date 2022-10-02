import { useContext } from "react";
import { SetTodoContext } from "../../App";
import { TodoCard } from "../TodoCard";

export const Todos = () => {
  const { todos, onDelete } = useContext(SetTodoContext);

  return (
    <section className="container d-flex flex-wrap justify-content-center">
      {todos.map((todo) => {
        return <TodoCard key={todo.id} {...todo} onDelete={onDelete} />;
      })}
    </section>
  );
};
