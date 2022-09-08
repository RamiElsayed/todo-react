import "./Header.css";
export const Header = ({ title, todoCount }) => {
  return (
    <div className="jumbotron text-center">
      <h1 class="display-4">Hello, world!</h1>
      <p class="lead">
        {todoCount
          ? `You have ${todoCount} things to do`
          : "You have no to do items"}
      </p>
    </div>
  );
};
