import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function JobOpeningCards({
  title,
  location,
  department,
  about,
  requirements,
  icon,
}) {
  const { t } = useTranslation();

  return (
    <div className="jobCard">
      <div className="aboutJob">
        <h3>{title}</h3>
        <div className="jobTags">
          <span className="tag">
            {t("careers_location")}: {location}
          </span>
          <span className="tag">
            {t("careers_department")}: {department}
          </span>
        </div>
        <div className="aboutJob">
          <h3>{t("careers_about_job")}</h3>
          <p>{about}</p>
        </div>
      </div>
      <div className="jobRequiermentsContainer">
        <div className="jobRequierments">
          <h3>{t("careers_requirements_qualifications")}</h3>
          <ul>
            {requirements.map((req, index) => (
              <li key={index}>
                <img src={icon} alt="requirement icon" />
                <p>{req}</p>
              </li>
            ))}
          </ul>
        </div>
        <button className="applyBtn">
          <Link to="/signup">{t("careers_apply_now")}</Link>
        </button>
      </div>
    </div>
  );
}
