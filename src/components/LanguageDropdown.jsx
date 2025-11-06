import { useState } from "react";
import { createPortal } from "react-dom";

import "../i18n.js";
import "./style/LangDropDown.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

import flagAR from "../assets/images/icon/ar.png";
import flagTR from "../assets/images/icon/tr.png";
import flagEN from "../assets/images/icon/en.png";
import flagDE from "../assets/images/icon/du.png";
import flagRU from "../assets/images/icon/ru.png";
import flagFR from "../assets/images/icon/fr.png";
import flagES from "../assets/images/icon/es.png";

const languages = [
  { code: "ar", name: "العربية", short: "AR", flag: flagAR },
  { code: "tr", name: "Türkçe", short: "TR", flag: flagTR },
  { code: "en", name: "English", short: "EN", flag: flagEN },
  { code: "de", name: "Deutsch", short: "DE", flag: flagDE },
  { code: "ru", name: "Русский", short: "RU", flag: flagRU },
  { code: "fr", name: "Français", short: "FR", flag: flagFR },
  { code: "es", name: "Español", short: "ES", flag: flagES },
];

export default function LanguageDropdown({ i18n }) {
  const [selectedLang, setSelectedLang] = useState(
    i18n.language?.split("-")[0] || "en"
  );
  const [open, setOpen] = useState(false);

  const handleSelect = (lang) => {
    i18n.changeLanguage(lang.code);
    setSelectedLang(lang.code);
    setOpen(false);
  };

  const current = languages.find((l) => l.code === selectedLang);

  return (
    <div className="langDropdown">
      <div className="langSelected" onClick={() => setOpen(!open)}>
        <div>
          <img src={current.flag} alt={current.name} />
          <span>{current.short}</span>
        </div>
        <span className="arrow">
          <FontAwesomeIcon icon={open ? faChevronUp : faChevronDown} />
        </span>
      </div>

      {open &&
        createPortal(
          <div className="langMenu" onClick={(e) => e.stopPropagation()}>
            <p className="langTitle">Select Language 🌐</p>
            <ul>
              {languages.map((lang) => (
                <li
                  key={lang.code}
                  onClick={() => handleSelect(lang)}
                  className={lang.code === selectedLang ? "active" : ""}
                >
                  <div className="langInfo">
                    <div>
                      <img src={lang.flag} alt={lang.name} />
                    </div>
                    <div>
                      <strong>{lang.name}</strong>
                      <span>{lang.short}</span>
                    </div>
                  </div>
                  {lang.code === selectedLang && (
                    <span className="check">✔</span>
                  )}
                </li>
              ))}
            </ul>
          </div>,
          document.body
        )}
    </div>
  );
}
