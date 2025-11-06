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
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer>
      <div className="logo">
        <img src={Logo} alt={t("footer_logo")} />
        <h2>{t("footer_logo_text")}</h2>
      </div>

      <div className="footerNav">
        <ul className="centerNav">
          <li>
            <Link to="/">{t("nav_home")}</Link>
          </li>
          <li>
            <Link to="/careers">{t("nav_careers")}</Link>
          </li>
          <li>
            <Link to="/about">{t("nav_about")}</Link>
          </li>
          <li>
            <Link to="/security">{t("nav_security")}</Link>
          </li>
        </ul>
      </div>

      <div className="contactAddresses">
        <div className="address">
          <FontAwesomeIcon className="icon" icon={faEnvelope} />{" "}
          {t("footer_email")}
        </div>
        <div className="address">
          <FontAwesomeIcon className="icon" icon={faPhone} />{" "}
          {t("footer_phone")}
        </div>
        <div className="address">
          <FontAwesomeIcon className="icon" icon={faLocation} />{" "}
          {t("footer_location")}
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
          <p>{t("footer_rights")}</p>
        </div>

        <div className="privactAndTerms">
          <p>{t("footer_privacy_terms")}</p>
        </div>
      </div>
    </footer>
  );
}
