import { useState } from "react";
import "../components/style/Home.css";
import IndividualTest from "./IndividualTest.jsx";
import BuisnessTest from "./BuisnessTest.jsx";
import { useTranslation } from "react-i18next";

export default function OurTestimonials() {
  const { t } = useTranslation();
  const [activeSection, setActiveSection] = useState("individual");

  return (
    <div className="ourTestimonials">
      <div className="sectionHeader">
        <div className="text">
          <h2>
            {t("testimonials_title").split(" ")[0]}{" "}
            <span>{t("testimonials_title").split(" ")[1]}</span>
          </h2>
          <p>{t("testimonials_description")}</p>
        </div>
        <div className="btns">
          <button
            type="button"
            className={activeSection === "individual" ? "active" : ""}
            onClick={() => setActiveSection("individual")}
          >
            {t("testimonials_individual_btn")}
          </button>

          <button
            type="button"
            className={activeSection === "business" ? "active" : ""}
            onClick={() => setActiveSection("business")}
          >
            {t("testimonials_business_btn")}
          </button>
        </div>
      </div>

      <div>
        {activeSection === "individual" ? <IndividualTest /> : <BuisnessTest />}
      </div>
    </div>
  );
}
