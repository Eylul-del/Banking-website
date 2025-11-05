import { Link } from "react-router-dom";
import "../components/style/Login.css";
import OurTestimonials from "./OurTestimonials.jsx";
import Icon from "../assets/images/img/Login/Icon.png";
import Icon1 from "../assets/images/img/Login/Icon1.png";
import Icon2 from "../assets/images/img/Login/Icon2.png";
import { useState } from "react";
import Popup from "./PopUp.jsx";

export default function Login() {
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });

  const [popupMessage, setPopupMessage] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const correctPassword = "Te2006st";

  const handleSignUp = () => {
    if (inputValue.password === correctPassword) {
      setPopupMessage("✅ Password correct! Welcome back!");
    } else {
      setPopupMessage("❌ The password is not correct!");
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
          <h1>Login</h1>
          <p>Welcome back! Pleace login in to access you account.</p>
        </div>

        <form>
          <div className="inputs">
            <input
              type="email"
              placeholder="Enter your email"
              value={inputValue.email}
              onChange={(e) => {
                setInputValue({ ...inputValue, email: e.target.value });
              }}
            />
            <input
              type="password"
              placeholder="Enter your Password"
              value={inputValue.password}
              onChange={(e) => {
                setInputValue({ ...inputValue, password: e.target.value });
              }}
            />
          </div>
          <div className="passwordChange">
            <a href="#">Forgot Password?</a>
          </div>
          <div className="buttons">
            <button onClick={handleSignUp}>Login</button>
            <button>
              <Link to="/singUp">Sing Up</Link>
            </button>
            <Popup message={popupMessage} show={showPopup} />
          </div>
        </form>
        <div className="continueWith">
          <span>Or continue with</span>
          <div className="options">
            <img src={Icon} alt="icon" />
            <img src={Icon1} alt="icon" />
            <img src={Icon2} alt="icon" />
          </div>
        </div>
      </main>

      <OurTestimonials />
    </div>
  );
}
