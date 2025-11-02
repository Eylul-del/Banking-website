import { Link } from "react-router-dom";
import "../components/style/Login.css";
import OurTestimonials from "./OurTestimonials.jsx";
import Icon from "../assets/images/img/Login/Icon.png";
import Icon1 from "../assets/images/img/Login/Icon1.png";
import Icon2 from "../assets/images/img/Login/Icon2.png";

export default function Login() {
  return (
    <div className="pageContainer">
      <main className="loginMain">
        <div className="title">
          <h1>Login</h1>
          <p>Welcome back! Pleace login in to access you account.</p>
        </div>

        <form>
          <div className="inputs">
            <input type="email" placeholder="Enter your email" />
            <input type="password" placeholder="Enter your Password" />
          </div>
          <div className="passwordChange">
            <a href="#">Forgot Password?</a>
          </div>
          <div className="buttons">
            <button>Login</button>
            <button>
              <Link to="/singUp">Sing Up</Link>
            </button>
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
