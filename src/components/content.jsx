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
      <ToDoList />
      <GlobalBank />
      <AnchorAcademy />
      <MatchTheWords />
      <WeatherApp />
    </section>
  );
};

export default Content;
