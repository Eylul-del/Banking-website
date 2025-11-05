import "./style/Security.css";

export default function SecurityProtectionCards({ Icon, title, cardContent }) {
  return (
    <div className="card">
      <div className="title">
        <img src={Icon} alt="Icon " />
        <h3>{title}</h3>
      </div>
      <div className="cardContent">
        <p>{cardContent}</p>
      </div>
    </div>
  );
}
