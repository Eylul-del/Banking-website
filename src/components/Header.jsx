import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./style/Header.css";
import HomeCorner from "../assets/images/img/homeCorner.png";
import Logo from "../assets/images/img/logo.png";
import navBtn from "../assets/images/icon/sideBarBtn.png";
import { useTranslation } from "react-i18next";

import flagAR from "../assets/images/icon/ar.png";
import flagTR from "../assets/images/icon/tr.png";
import flagEN from "../assets/images/icon/en.png";
import flagRU from "../assets/images/icon/ru.png";
import flagDU from "../assets/images/icon/du.png";
import flagFR from "../assets/images/icon/fr.png";
import LanguageDropdown from "./LanguageDropdown";

const languages = [
  { code: "ar", name: "العربية", flag: flagAR },
  { code: "tr", name: "Türkçe", flag: flagTR },
  { code: "en", name: "English", flag: flagEN },
  { code: "de", name: "Deutsch", flag: flagDU },
  { code: "ru", name: "Русский", flag: flagRU },
  { code: "fr", name: "Français", flag: flagFR },
];

export default function Header() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [selectedLang, setSelectedLang] = useState(
    i18n.language?.split("-")[0] || "en"
  );

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
  }, [i18n.language]);

  const handleMobileSelect = (lang) => {
    i18n.changeLanguage(lang.code);
    setSelectedLang(lang.code);
    setIsOpen(false);
  };

  return (
    <header>
      <div className="cornerImg">
        <img src={HomeCorner} alt={t("header_home_corner")} />
      </div>

      {/* Desktop */}
      {!isMobile && (
        <nav className="navDesktop">
          <div className="logo">
            <img src={Logo} alt={t("header_logo")} />
            <h2>{t("header_logo_text")}</h2>
          </div>

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

          <ul className="rightNav">
            <li>
              <Link to="/signup">{t("nav_signup")}</Link>
            </li>
            <li>
              <Link to="/login">{t("nav_login")}</Link>
            </li>
            <li>
              <LanguageDropdown i18n={i18n} />
            </li>
          </ul>
        </nav>
      )}

      {/* Mobile */}
      {isMobile && (
        <>
          <div className="mobileHeader">
            <div className="logo">
              <img src={Logo} alt={t("header_logo")} />
              <h2>{t("header_logo_text")}</h2>
            </div>
            <div className="navMobileBtn" onClick={() => setIsOpen(!isOpen)}>
              <img src={navBtn} alt={t("header_menu")} />
            </div>
          </div>

          <nav className={`navMobile ${isOpen ? "show" : ""}`}>
            <ul>
              <li>
                <Link to="/" onClick={() => setIsOpen(false)}>
                  {t("nav_home")}
                </Link>
              </li>
              <li>
                <Link to="/careers" onClick={() => setIsOpen(false)}>
                  {t("nav_careers")}
                </Link>
              </li>
              <li>
                <Link to="/about" onClick={() => setIsOpen(false)}>
                  {t("nav_about")}
                </Link>
              </li>
              <li>
                <Link to="/security" onClick={() => setIsOpen(false)}>
                  {t("nav_security")}
                </Link>
              </li>
              <li>
                <Link to="/signup" onClick={() => setIsOpen(false)}>
                  {t("nav_signup")}
                </Link>
              </li>
              <li>
                <Link to="/login" onClick={() => setIsOpen(false)}>
                  {t("nav_login")}
                </Link>
              </li>

              <li>
                <ul
                  className="mobileLangsList"
                  style={{
                    display: "flex",
                    gap: "8px",
                    padding: 0,
                    listStyle: "none",
                    marginTop: "10px",
                  }}
                >
                  {languages.map((lang) => (
                    <li key={lang.code}>
                      <img
                        src={lang.flag}
                        alt={lang.name}
                        style={{
                          width: 32,
                          height: 32,
                          cursor: "pointer",
                          border:
                            lang.code === selectedLang
                              ? "2px solid #007BFF"
                              : "2px solid transparent",
                          borderRadius: "50%",
                        }}
                        onClick={() => handleMobileSelect(lang)}
                      />
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </nav>
        </>
      )}
    </header>
  );
}
