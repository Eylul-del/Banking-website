import { Link } from "react-router-dom";
import "./style/Home.css";

export default function OpenAccount() {
  return (
    <div className="lastOpenAccount">
      <div className="sectionHeader">
        <div className="text">
          <h2>
            Start your financial journey with <span>YourBank today!</span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur. Blandit odio semper risus
            pellentesque elit. Pellentesque eget ut imperdiet nulla penatibus.
            Nascetur viverra arcu sed amet cursus purus.
          </p>
        </div>
        <div className="btn">
          <Link to="/signup">Open Account</Link>
        </div>
      </div>
    </div>
  );
}
