import weatherApp from "../../images/weatherApp.jpg";

const WeatherApp = () => {
  return (
    <article>
      <a href="https://master.d2xfqger0dzjfg.amplifyapp.com/" target="_blank">
        <img src={weatherApp} alt="Project Image" />
        <div className="article__content">
          <h1>7-Day Weather Forecast</h1>
          <p>
            Utilized react-accessible-accordion to display a collapsible 7-day
            weather forecast.
          </p>
        </div>
      </a>
    </article>
  );
};

export default WeatherApp;
