import anchorAcademy from "../../images/anchorAcademy.jpg";
const AnchorAcademy = () => {
  return (
    <article>
      <a href="#">
        <img src={anchorAcademy} alt="Project Image" />

        <p>
          Keep track of enrolled students and teachers for the current school
          year.
        </p>
        <div className="userInfo">
          <p className="userInfo__content">Login Info:</p>
          <p className="userInfo__content">User: test@gmail.com</p>
          <p className="userInfo__content">Password: 11111</p>
        </div>
      </a>
    </article>
  );
};

export default AnchorAcademy;