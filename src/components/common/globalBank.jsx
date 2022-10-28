import globalBank from "../../images/globalBank.jpg";
import globalGrey from "../../images/globalGrey.jpg";
const GlobalBank = () => {
  return (
    <article>
      <a href="https://master.dxih5wzvb70nj.amplifyapp.com/" target="_blank">
        <img src={globalGrey} alt="Project Image" />
        <div className="article__content">
          <h1>Responsive Design</h1>
          <p>
            Provide responsive designs for your applications with a mobile-first
            approach.
          </p>
        </div>
      </a>
    </article>
  );
};

export default GlobalBank;
