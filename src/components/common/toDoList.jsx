import friendsbook from "../../images/friendsbook.jpg";

const ToDoList = () => {
  return (
    <article>
      <a href="#">
        <img src={friendsbook} alt="Project Image" />
        <div className="article__content">
          <h1>To-Do List</h1>
          <p>
            List all your pending things to-do and avoid forgetting anything
            important.
          </p>
        </div>
      </a>
    </article>
  );
};

export default ToDoList;
