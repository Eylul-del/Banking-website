import "../components/style/Security.css";
import FAQ from "./FAQ.jsx";
import mainImage from "../assets/images/img/Security/mainImage.png";
import Icon from "../assets/images/img/Security/Icon Container.png";
import Icon1 from "../assets/images/img/Security/Icon Container (1).png";
import Icon2 from "../assets/images/img/Security/Icon Container (2).png";
import Icon3 from "../assets/images/img/Security/Icon Container (3).png";
import OurBenefitsCards from "./OurBenefitsCards.jsx";
import { useTranslation } from "react-i18next";

export default function Security() {
  const { t } = useTranslation();

  const protectionData = [
    {
      Icon: Icon,
      title: t("security_protection_online_title"),
      description: t("security_protection_online_desc"),
    },
    {
      Icon: Icon1,
      title: t("security_protection_mfa_title"),
      description: t("security_protection_mfa_desc"),
    },
    {
      Icon: Icon2,
      title: t("security_protection_fraud_title"),
      description: t("security_protection_fraud_desc"),
    },
    {
      Icon: Icon3,
      title: t("security_protection_mobile_title"),
      description: t("security_protection_mobile_desc"),
    },
  ];

  return (
    <div className="pageContainer">
      <main className="securityMain">
        <div className="mainTextcontent">
          <h1>
            {t("security_main_title")}{" "}
            <span>{t("security_main_title_span")}</span>
          </h1>
          <p>{t("security_main_paragraph")}</p>
        </div>
        <div className="mainImg">
          <img src={mainImage} alt={t("security_main_img_alt")} />
        </div>
      </main>

      <div className="protection">
        <div className="sectionHeader">
          <div className="text">
            <h2>
              {t("security_protect_title")}{" "}
              <span>{t("security_protect_title_span")}</span>
            </h2>
            <p>{t("security_protect_paragraph")}</p>
          </div>
        </div>
        <div className="sectionCards">
          {protectionData.map((c, i) => (
            <OurBenefitsCards
              key={i}
              Icon={c.Icon}
              title={c.title}
              description={c.description}
            />
          ))}
        </div>
      </div>

      <FAQ />
    </div>
  );
}
