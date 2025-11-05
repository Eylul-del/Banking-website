import { useState } from "react";
import "./style/LangDropDown.css";
import "../i18n.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

import flagAR from "../assets/images/icon/ar.png";
import flagTR from "../assets/images/icon/tr.png";
import flagEN from "../assets/images/icon/en.png";
import flagRU from "../assets/images/icon/ru.png";
import flagDU from "../assets/images/icon/du.png";
import flagFR from "../assets/images/icon/fr.png";

const languages = [
  { code: "ar", name: "العربية", flag: flagAR },
  { code: "tr", name: "Türkçe", flag: flagTR },
  { code: "en", name: "English", flag: flagEN },
  { code: "de", name: "Deutsch", flag: flagDU },
  { code: "ru", name: "Русский", flag: flagRU },
  { code: "fr", name: "Français", flag: flagFR },
];

export default function LanguageDropdown({ i18n }) {
  const initialLang = i18n.language?.split("-")[0] || "en";
  const [selected, setSelected] = useState(initialLang);
  const [open, setOpen] = useState(false);

  const handleSelect = (lang) => {
    i18n.changeLanguage(lang.code);
    setSelected(lang.code);
    setOpen(false);
  };

  const current = languages.find((l) => l.code === selected);

  return (
    <div className="langDropdown">
      <div className="selectedLang" onClick={() => setOpen(!open)}>
        <div>
          <img src={current.flag} alt={current.name} className="selectedFlag" />
          <span className="selectedName">{current.name}</span>
        </div>
        <span className="arrow">
          <FontAwesomeIcon icon={open ? faChevronUp : faChevronDown} />
        </span>
      </div>

      {open && (
        <div className="dropdownMenu">
          <p className="dropdownTitle">Select Language 🌐</p>
          <div className="desktopLangs">
            {languages.map((lang) => (
              <div
                key={lang.code}
                className={`dropdownItem ${
                  lang.code === selected ? "active" : ""
                }`}
                onClick={() => handleSelect(lang)}
              >
                <img src={lang.flag} alt={lang.name} />
                <div className="langInfo">
                  <span className="langName">{lang.name}</span>
                </div>
                {lang.code === selected && <span className="check">✔</span>}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
