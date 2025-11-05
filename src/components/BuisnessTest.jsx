// import IconContainer1 from "../assets/images/icon/Icon (1).png";

// export default function BuisnessTest() {
//   return (
//     <div className="testimonialsCards">
//       <div className="card">
//         <img src={IconContainer1} alt="IconContainer" />
//         <div className="opinion">
//           <p>
//             Partnering with YourBank has streamlined our company’s financial
//             operations. Their business checking solutions and online payroll
//             services save us hours every week.
//           </p>
//         </div>
//         <div className="name">
//           <span>Michael R</span>
//         </div>
//       </div>

//       <div className="card">
//         <img src={IconContainer1} alt="IconContainer" />
//         <div className="opinion">
//           <p>
//             YourBank’s business loan options gave us the flexibility to expand
//             into new markets. Their advisors understood our goals and provided
//             financing that fit perfectly with our growth plan.
//           </p>
//         </div>
//         <div className="name">
//           <span>Linda P</span>
//         </div>
//       </div>

//       <div className="card">
//         <img src={IconContainer1} alt="IconContainer" />
//         <div className="opinion">
//           <p>
//             As a small business owner, I appreciate how YourBank treats every
//             client like a priority. Their support team responds quickly, and
//             their digital tools make managing accounts effortless.
//           </p>
//         </div>
//         <div className="name">
//           <span>David K</span>
//         </div>
//       </div>
//     </div>
//   );
// }

import IconContainer1 from "../assets/images/icon/Icon (1).png";
import { useTranslation } from "react-i18next";

export default function BuisnessTest() {
  const { t } = useTranslation();

  const testimonials = [
    { opinion: t("business_testimonial_1"), name: t("business_name_1") },
    { opinion: t("business_testimonial_2"), name: t("business_name_2") },
    { opinion: t("business_testimonial_3"), name: t("business_name_3") },
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
