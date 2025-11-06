import "../components/style/signUp.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import OurTestimonials from "./OurTestimonials.jsx";
import Icon from "../assets/images/img/Login/Icon.png";
import Icon1 from "../assets/images/img/Login/Icon1.png";
import Icon2 from "../assets/images/img/Login/Icon2.png";
import Popup from "./PopUp.jsx";
import { useTranslation } from "react-i18next";

export default function SignUp() {
  const { t } = useTranslation();

  const [inputValue, setInputValue] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [popupMessage, setPopupMessage] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const correctPassword = "Te2006st";

  const handleSignUp = (e) => {
    e.preventDefault();
    if (inputValue.password === correctPassword) {
      setPopupMessage(t("signup_password_correct"));
    } else {
      setPopupMessage(t("signup_password_incorrect"));
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
          <h1>{t("signup_title")}</h1>
          <p>{t("signup_subtitle")}</p>
        </div>
        <form>
          <div className="inputs">
            <input
              type="text"
              placeholder={t("signup_placeholder_firstName")}
              value={inputValue.firstName}
              onChange={(e) =>
                setInputValue({ ...inputValue, firstName: e.target.value })
              }
            />
            <input
              type="text"
              placeholder={t("signup_placeholder_lastName")}
              value={inputValue.lastName}
              onChange={(e) =>
                setInputValue({ ...inputValue, lastName: e.target.value })
              }
            />
            <input
              type="email"
              placeholder={t("signup_placeholder_email")}
              value={inputValue.email}
              onChange={(e) =>
                setInputValue({ ...inputValue, email: e.target.value })
              }
            />
            <input
              type="password"
              placeholder={t("signup_placeholder_password")}
              value={inputValue.password}
              onChange={(e) =>
                setInputValue({ ...inputValue, password: e.target.value })
              }
            />
          </div>
          <div className="buttons">
            <button>
              <Link to="/Login">{t("signup_login_btn")}</Link>
            </button>
            <button onClick={handleSignUp}>{t("signup_signup_btn")}</button>
            <Popup message={popupMessage} show={showPopup} />
          </div>
        </form>
        <div className="continueWith">
          <span>{t("signup_or_continue")}</span>
          <div className="options">
            <img src={Icon} alt={t("signup_icon_alt")} />
            <img src={Icon1} alt={t("signup_icon_alt")} />
            <img src={Icon2} alt={t("signup_icon_alt")} />
          </div>
        </div>
      </main>

      <OurTestimonials />
    </div>
  );
}
