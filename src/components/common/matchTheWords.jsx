import matchTheWords from "../../images/matchTheWords.jpg";

const MatchTheWords = () => {
  return (
    <article>
      <a href="https://master.d37f0zqsku80rx.amplifyapp.com/" target="_blank">
        <img src={matchTheWords} alt="Project Image" />
        <div className="article__content">
          <h1>Match the Words Game</h1>
          <p>Test your knowledge with this fun activity and learn new words.</p>
        </div>
      </a>
    </article>
  );
};

export default MatchTheWords;
