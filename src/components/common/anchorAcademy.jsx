import anchorAcademy from "../../images/anchorAcademy.jpg";
import { Link } from "react-router-dom";

const AnchorAcademy = () => {
  return (
    <article>
      <Link to="/video">
        <img src={anchorAcademy} alt="Project Image" />
        <div className="article__content">
          <h1>School Database</h1>
          <p>
            MERN stack - Implemented pagination, sorting and filters for easy
            data management on the client side.
          </p>
        </div>
      </Link>
    </article>
  );
};

export default AnchorAcademy;
