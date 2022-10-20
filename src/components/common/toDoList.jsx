import friendsbook from "../../images/friendsbook.jpg";

const ToDoList = () => {
  return (
    <article>
      <a href="#">
        <img src={friendsbook} alt="Project Image" />

        <p>
          Keep track of enrolled students and teachers for the current school
          year.
        </p>
      </a>
    </article>
  );
};

export default ToDoList;
