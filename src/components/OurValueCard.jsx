import React from "react";
import "./style/Carees.css";

export default function OurValueCard({ title, description }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}
