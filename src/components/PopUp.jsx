import "./style/PopUp.css";

export default function Popup({ message, show }) {
  if (!show) return null;

  return (
    <div className="popup">
      <p>{message}</p>
    </div>
  );
}
