import weatherApp from "../../images/weatherApp.jpg";

const WeatherApp = () => {
  return (
    <article>
      <a href="#">
        <img src={weatherApp} alt="Project Image" />
        <p>
          Keep track of enrolled students and teachers for the current school
          year.
        </p>
      </a>
    </article>
  );
};

export default WeatherApp;
