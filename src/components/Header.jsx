import { useState } from "react";
import { Link } from "react-router-dom";
import "./style/Header.css";
import HomeCorner from "../assets/images/img/homeCorner.png";
import Logo from "../assets/images/img/logo.png";
import navBtn from "../assets/images/icon/sideBarBtn.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <div className="cornerImg">
        <img src={HomeCorner} alt="Home Corner" />
      </div>
      <nav className="navDesktop">
        <div className="logo">
          <img src={Logo} alt="logo" />
          <h2>YourBank</h2>
        </div>

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

        <ul className="rightNav">
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
      <div className="mobileHeader">
        <div className="logo">
          <img src={Logo} alt="logo" />
          <h2>YourBank</h2>
        </div>
        <div
          className="navMobileBtn"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <img src={navBtn} alt="menu" />
        </div>
      </div>
      <nav className={`navMobile ${isOpen ? "show" : ""}`}>
        <ul>
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
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
