import { useTranslation } from "react-i18next";
import IconContainer11 from "../assets/images/icon/Icon Container (11).png";
import IconContainer1 from "../assets/images/icon/Icon Container (1).png";
import IconContainer2 from "../assets/images/icon/Icon Container (2).png";

export default function IndividualProducts() {
  const { t } = useTranslation();

  const products = [
    {
      Icon: IconContainer11,
      title: t("individual_products_checking_title"),
      description: t("individual_products_checking_desc"),
    },
    {
      Icon: IconContainer1,
      title: t("individual_products_saving_title"),
      description: t("individual_products_saving_desc"),
    },
    {
      Icon: IconContainer2,
      title: t("individual_products_loans_title"),
      description: t("individual_products_loans_desc"),
    },
  ];

  return (
    <div className="productsCards">
      {products.map((p, index) => (
        <div key={index} className="card">
          <div className="img">
            <img src={p.Icon} alt={`${p.title} Icon`} />
          </div>
          <div className="title">
            <h3>{p.title}</h3>
          </div>
          <div className="text">
            <p>{p.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
