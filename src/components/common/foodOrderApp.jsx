import friendsbook from "../../images/friendsbook.jpg";
const FoodOrderApp = () => {
  return (
    <article>
      <a href="#">
        <img src={friendsbook} alt="Project Image" />
        <div className="article__content">
          <h1>Food Ordering App</h1>
          <p>
            Get your orders in securely and keep record of your order history.
          </p>
        </div>
      </a>
    </article>
  );
};

export default FoodOrderApp;
