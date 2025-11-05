import "../components/style/signUp.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import OurTestimonials from "./OurTestimonials.jsx";
import Icon from "../assets/images/img/Login/Icon.png";
import Icon1 from "../assets/images/img/Login/Icon1.png";
import Icon2 from "../assets/images/img/Login/Icon2.png";
import Popup from "./PopUp.jsx";

export default function SignUp() {
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
          <h1>Sign Up</h1>
          <p>
            Join our community today! Create an account to unlock exclusive
            features and personalized experiences.
          </p>
        </div>
        <form>
          <div className="inputs">
            <input
              type="text"
              placeholder="Enter First Name"
              value={inputValue.firstName}
              onChange={(e) => {
                setInputValue({ ...inputValue, firstName: e.target.value });
              }}
            />
            <input
              type="text"
              placeholder="Enter Last Name"
              value={inputValue.lastName}
              onChange={(e) => {
                setInputValue({ ...inputValue, lastName: e.target.value });
              }}
            />
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
          <div className="buttons">
            <button>
              <Link to="/Login">Login</Link>
            </button>
            <button onClick={handleSignUp}>Sign Up</button>
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
