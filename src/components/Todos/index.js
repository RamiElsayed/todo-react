import { TodoCard } from "../TodoCard";
export const Todos = ({ todos, onComplete, onDelete }) => {
  return (
    <section className="container d-flex flex-wrap justify-content-center">
      {todos.map((todo) => {
        return (
          <TodoCard
            key={todo.id}
            {...todo}
            onComplete={onComplete}
            onDelete={onDelete}
          />
        );
      })}
    </section>
  );
};
