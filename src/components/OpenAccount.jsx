import { Link } from "react-router-dom";
import "./style/Home.css";
import { useTranslation } from "react-i18next";

export default function OpenAccount() {
  const { t } = useTranslation();

  return (
    <div className="lastOpenAccount">
      <div className="sectionHeader">
        <div className="text">
          <h2>
            {t("openAccount_title_part1")}{" "}
            <span>{t("openAccount_title_part2")}</span>
          </h2>
          <p>{t("openAccount_description")}</p>
        </div>
        <div className="btn">
          <Link to="/signup">{t("openAccount_button")}</Link>
        </div>
      </div>
    </div>
  );
}
