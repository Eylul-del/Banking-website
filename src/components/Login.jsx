import { Link } from "react-router-dom";
import "../components/style/Login.css";
import OurTestimonials from "./OurTestimonials.jsx";
import Icon from "../assets/images/img/Login/Icon.png";
import Icon1 from "../assets/images/img/Login/Icon1.png";
import Icon2 from "../assets/images/img/Login/Icon2.png";
import { useState } from "react";
import Popup from "./PopUp.jsx";
import { useTranslation } from "react-i18next";

export default function Login() {
  const { t } = useTranslation();

  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });

  const [popupMessage, setPopupMessage] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const correctPassword = "Te2006st";

  const handleLogin = () => {
    if (inputValue.password === correctPassword) {
      setPopupMessage(t("login_password_correct"));
    } else {
      setPopupMessage(t("login_password_incorrect"));
    }

    setShowPopup(true);

    setTimeout(() => {
      setShowPopup(false);
    }, 5000);
  };

  return (
    <div className="pageContainer">
      <main className="loginMain">
        <div className="title">
          <h1>{t("login_title")}</h1>
          <p>{t("login_subtitle")}</p>
        </div>

        <form>
          <div className="inputs">
            <input
              type="email"
              placeholder={t("login_placeholder_email")}
              value={inputValue.email}
              onChange={(e) =>
                setInputValue({ ...inputValue, email: e.target.value })
              }
            />
            <input
              type="password"
              placeholder={t("login_placeholder_password")}
              value={inputValue.password}
              onChange={(e) =>
                setInputValue({ ...inputValue, password: e.target.value })
              }
            />
          </div>
          <div className="passwordChange">
            <a href="#">{t("login_forgot_password")}</a>
          </div>
          <div className="buttons">
            <button type="button" onClick={handleLogin}>
              {t("login_btn")}
            </button>
            <button>
              <Link to="/signUp">{t("login_signup_btn")}</Link>
            </button>
            <Popup message={popupMessage} show={showPopup} />
          </div>
        </form>
        <div className="continueWith">
          <span>{t("login_or_continue")}</span>
          <div className="options">
            <img src={Icon} alt={t("login_icon_alt")} />
            <img src={Icon1} alt={t("login_icon_alt")} />
            <img src={Icon2} alt={t("login_icon_alt")} />
          </div>
        </div>
      </main>

      <OurTestimonials />
    </div>
  );
}
