import "./TodoCard.css";
import { format } from "date-fns";

export const TodoCard = (props) => {
  return (
    <div className="card todo-card text-center">
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">
          Due Date: {format(new Date(props.dueDate), "dd mm yyyy")}
        </h6>
        <p className="card-text">{props.content}</p>
        <button
          id={props.id}
          onClick={props.onDelete}
          className="btn btn-warning"
        >
          Delete
        </button>
      </div>
    </div>
  );
};
