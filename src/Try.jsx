import { useTranslation } from "react-i18next";
import React from "react";

export default function Try() {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t("security_title")}</h1>
      <p>{t("security_paragraph")}</p>

      <button onClick={() => i18n.changeLanguage("en")}>English</button>
      <button onClick={() => i18n.changeLanguage("ar")}>العربية</button>
    </div>
  );
}
// // import { useTranslation } from "react-i18next";

// export default function Security() {
//   const { t, i18n } = useTranslation();

//   return (
//     <div>
//       <h1>{t("security_title")}</h1>
//       <p>{t("security_paragraph")}</p>

//       <button onClick={() => i18n.changeLanguage("en")}>English</button>
//       <button onClick={() => i18n.changeLanguage("ar")}>العربية</button>
//     </div>
//   );
// }
