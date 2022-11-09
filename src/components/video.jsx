import { Link } from "react-router-dom";

const Video = () => {
  return (
    <section className="video">
      <h1>School Database Walk-through Video</h1>
      <iframe
        className="video__media"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/biMX2ubi8Ow"
        title="School Database Walk-through"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <Link to="/">Go Back</Link>
    </section>
  );
};

export default Video;
