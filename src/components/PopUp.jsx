import "./style/Popup.css";

export default function Popup({ message, show }) {
  if (!show) return null;

  return (
    <div className="popup">
      <p>{message}</p>
    </div>
  );
}
