import List from "../../images/toDoList.jpg";

const ToDoList = () => {
  return (
    <article>
      <a href="https://master.dgtpfgfawshn4.amplifyapp.com/" target="_blank">
        <img src={List} alt="Project Image" />
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
