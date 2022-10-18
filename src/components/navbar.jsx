import logo from "../images/logo.png";
import { ReactComponent as Github } from "../images/github.svg";
import { ReactComponent as Linkedin } from "../images/linkedin.svg";

const Navbar = () => {
  return (
    <nav>
      <img className="logo" src={logo} alt="Developer Logo" />
      <div>
        <a href="https://github.com/Karla-Abad" target="_blank">
          <Github className="icon" />
        </a>
        <a href="https://www.linkedin.com/in/karla-v-abad" target="_blank">
          <Linkedin className="icon" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
