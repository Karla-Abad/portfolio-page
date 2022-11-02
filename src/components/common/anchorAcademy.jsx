import anchorAcademy from "../../images/anchorAcademy.jpg";
const AnchorAcademy = () => {
  return (
    <article>
      <a href="https://test-1-9657d.web.app/" target="_blank">
        <img src={anchorAcademy} alt="Project Image" />
        <div className="article__content">
          <h1>School Database</h1>
          <p>
            MERN stack - Implemented pagination, sorting and filters for easy
            data management on the client side.
          </p>
        </div>
      </a>
    </article>
  );
};

export default AnchorAcademy;
