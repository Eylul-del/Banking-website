import { useState } from "react";
import "../components/style/Home.css";
import IndividualTest from "./individualTest";
import BuisnessTest from "./BuisnessTest";

export default function OurTestimonials() {
  const [activeSection, setActiveSection] = useState("individual");
  return (
    <div className="ourTestimonials">
      <div className="sectionHeader">
        <div className="text">
          <h2>
            Our <span>Testimonials</span>
          </h2>
          <p>
            Discover how YourBank has transformed lives with innovative digital
            solutions and personalized customer service. See why our clients
            trust us for a secure and prosperous financial journey
          </p>
        </div>
        <div className="btns">
          <button
            type="button"
            className={activeSection === "individual" ? "active" : ""}
            onClick={() => setActiveSection("individual")}
          >
            For Individuals
          </button>

          <button
            type="button"
            className={activeSection === "business" ? "active" : ""}
            onClick={() => setActiveSection("business")}
          >
            For Businesses
          </button>
        </div>
      </div>

      <div>
        {activeSection === "individual" ? <IndividualTest /> : <BuisnessTest />}
      </div>
    </div>
  );
}
