// import { Link } from "react-router-dom";
// import "./style/Home.css";

// export default function OpenAccount() {
//   return (
//     <div className="lastOpenAccount">
//       <div className="sectionHeader">
//         <div className="text">
//           <h2>
//             Start your financial journey with <span>YourBank today!</span>
//           </h2>
//           <p>
//             Lorem ipsum dolor sit amet consectetur. Blandit odio semper risus
//             pellentesque elit. Pellentesque eget ut imperdiet nulla penatibus.
//             Nascetur viverra arcu sed amet cursus purus.
//           </p>
//         </div>
//         <div className="btn">
//           <Link to="/signup">Open Account</Link>
//         </div>
//       </div>
//     </div>
//   );
// }

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
