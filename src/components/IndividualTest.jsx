import IconContainer1 from "../assets/images/icon/Icon (1).png";
import { useTranslation } from "react-i18next";

export default function IndividualTest() {
  const { t } = useTranslation();

  const testimonials = [
    { opinion: t("individual_testimonial_1"), name: t("individual_name_1") },
    { opinion: t("individual_testimonial_2"), name: t("individual_name_2") },
    { opinion: t("individual_testimonial_3"), name: t("individual_name_3") },
  ];

  return (
    <div className="testimonialsCards">
      {testimonials.map((tItem, index) => (
        <div className="card" key={index}>
          <img src={IconContainer1} alt="IconContainer" />
          <div className="opinion">
            <p>{tItem.opinion}</p>
          </div>
          <div className="name">
            <span>{tItem.name}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
