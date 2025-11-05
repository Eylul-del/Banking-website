import { Link } from "react-router-dom";
// import "./style/Careers.css";

export default function jobOpeningCards({
  title,
  location,
  department,
  about,
  requirements,
  icon,
}) {
  return (
    <div className="jobCard">
      <div className="aboutJob">
        <h3>{title}</h3>
        <div className="jobTags">
          <span className="tag">Location: {location}</span>
          <span className="tag"> Department: {department}</span>
        </div>
        <div className="aboutJob">
          <h3>About This Job</h3>
          <p>{about}</p>
        </div>
      </div>
      <div className="jobRequiermentsContainer">
        <div className="jobRequierments">
          <h3>Requirements & Qualifications</h3>
          <ul>
            {requirements.map((req, index) => {
              return (
                <li key={index}>
                  <img src={icon} alt="requirement icon" />
                  <p>{req}</p>
                </li>
              );
            })}
          </ul>
        </div>
        <button className="applyBtn">
          <Link to="/singUp">Apply Now</Link>
        </button>
      </div>
    </div>
  );
}
