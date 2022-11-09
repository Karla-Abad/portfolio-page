import AnchorAcademy from "./common/anchorAcademy";
import FoodOrderApp from "./common/foodOrderApp";
import GlobalBank from "./common/globalBank";
import MatchTheWords from "./common/matchTheWords";
import ToDoList from "./common/toDoList";
import WeatherApp from "./common/weatherApp";

const Content = () => {
  return (
    <section>
      <FoodOrderApp />
      <AnchorAcademy />
      <div className="section__link one">
        <a href="https://github.com/Karla-Abad/305_Burrito.git" target="_blank">
          View Code
        </a>
      </div>
      <div className="section__link two">
        <a
          href="https://github.com/Karla-Abad/Anchor_Academy.git"
          target="_blank"
        >
          View Code
        </a>
      </div>

      <GlobalBank />
      <MatchTheWords />
      <div className="section__link three">
        <a href="https://github.com/Karla-Abad/GlobalBank.git" target="_blank">
          View Code
        </a>
      </div>

      <div className="section__link four">
        <a
          href="https://github.com/Karla-Abad/Match_The_Words_Game.git"
          target="_blank"
        >
          View Code
        </a>
      </div>

      <WeatherApp />
      <ToDoList />
      <div className="section__link five">
        <a
          href="https://github.com/Karla-Abad/weather_forecast_app.git"
          target="_blank"
        >
          View Code
        </a>
      </div>

      <div className="section__link six">
        <a
          href="https://github.com/Karla-Abad/todo-list-3---components.git"
          target="_blank"
        >
          View Code
        </a>
      </div>
    </section>
  );
};

export default Content;
