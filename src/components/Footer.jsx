import "./style/Footer.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faLocation,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import Logo from "../assets/images/img/logo.png";

export default function Footer() {
  return (
    <footer>
      <div className="logo">
        <img src={Logo} alt="logo" />
        <h2>YourBank</h2>
      </div>

      <div className="footerNav">
        <ul className="centerNav">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/careers">Careers</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/security">Security</Link>
          </li>
        </ul>
      </div>

      <div className="contactAddresses">
        <div className="address">
          <FontAwesomeIcon className="icon" icon={faEnvelope} />{" "}
          hello@skillbridge.com
        </div>
        <div className="address">
          <FontAwesomeIcon className="icon" icon={faPhone} /> +91 91813 23 2309
        </div>
        <div className="address">
          <FontAwesomeIcon className="icon" icon={faLocation} /> Somewhere in
          the World
        </div>
      </div>

      <div className="rightContainer">
        <div className="socialMedia">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
        </div>

        <div className="rightP">
          <p>YourBank All Rights Reserved</p>
        </div>

        <div className="privactAndTerms">
          <p>Privact Polict | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
}
