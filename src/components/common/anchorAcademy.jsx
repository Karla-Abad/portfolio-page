import anchorAcademy from "../../images/anchorAcademy.jpg";
const AnchorAcademy = () => {
  return (
    <article>
      <a href="https://test-1-9657d.web.app/">
        <img src={anchorAcademy} alt="Project Image" />
        <div className="article__content">
          <h1>School Database</h1>
          <p>
            Keep track of enrolled students and teachers for the current school
            year.
          </p>
        </div>
      </a>
    </article>
  );
};

export default AnchorAcademy;
