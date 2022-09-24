import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export const TodoForm = ({ submit }) => {
  return (
    <section className="container">
      <form>
        <div class="mb-3">
          <input
            type="text"
            class="form-control"
            id="title"
            aria-describedby="Title"
          />
        </div>
        <div class="mb-3">
          <textarea
            class="form-control"
            placeholder="Add some details"
            id="content"
          ></textarea>
        </div>
        <div class="mb-3">
          <label for="dueDate" class="form-label">
            Due Date
          </label>
          <DatePicker id="dueDate" selected={Date.now()} />
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </section>
  );
};
