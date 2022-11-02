import burrito from "../../images/burrito.jpg";

const FoodOrderApp = () => {
  return (
    <article className="azul">
      <a href="http://34.224.91.149/" target="_blank">
        <img src={burrito} alt="Project Image" />
        <div className="article__content">
          <h1>Food Ordering App</h1>
          <p>
            MERN stack - Utilized Login/Registration/Auth with JSON Web Tokens.
          </p>
        </div>
      </a>
    </article>
  );
};

export default FoodOrderApp;
