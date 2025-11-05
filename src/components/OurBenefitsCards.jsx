import React from "react";
import "../components/style/Carees.css";

export default function OurBenefitsCards({ Icon, title, description }) {
  return (
    <div className="card">
      <div className="title">
        <img src={Icon} alt={`${title} icon`} />
        <h3>{title}</h3>
      </div>
      <div>
        <p>{description}</p>
      </div>
    </div>
  );
}
