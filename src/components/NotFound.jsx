// import { Link } from "react-router-dom";
// import "./style/NotFound.css";

// export default function NotFound() {
//   return (
//     <div className="notfound-container">
//       <h1 className="notfound-title">404</h1>
//       <p className="notfound-text">Oops! Page not found.</p>
//       <Link to="/" className="notfound-btn">
//         Go Back Home
//       </Link>
//     </div>
//   );
// }

import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./style/NotFound.css";

export default function NotFound() {
  const { t } = useTranslation();

  return (
    <div className="notfound-container">
      <h1 className="notfound-title">{t("notfound_title")}</h1>
      <p className="notfound-text">{t("notfound_text")}</p>
      <Link to="/" className="notfound-btn">
        {t("notfound_button")}
      </Link>
    </div>
  );
}
