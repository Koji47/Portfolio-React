import "./Footer.scss";
import Github from "../../../assets/Github.png";
import LinkedIn from "../../../assets/LinkedIn.png";

const Footer = () => {
  return (
    <footer className="footer">
      <a href="https://github.com/Koji47" className="footer__github">
        <img src={Github} alt="github link" className="footer__github-image" />
      </a>
      <a
        href="https://www.linkedin.com/in/chu-long-lam-33b769171/"
        className="footer__linkedin"
      >
        <img
          src={LinkedIn}
          alt="linkedin link"
          className="footer__linkedin-image"
        />
      </a>
    </footer>
  );
};

export default Footer;
