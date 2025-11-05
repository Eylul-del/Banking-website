// import IconContainer11 from "../assets/images/icon/Icon Container (11).png";
// import IconContainer1 from "../assets/images/icon/Icon Container (1).png";
// import IconContainer2 from "../assets/images/icon/Icon Container (2).png";

// export default function individualProducts() {
//   return (
//     <div className="productsCards">
//       <div className="card">
//         <div className="img">
//           <img src={IconContainer11} alt="Icon Container" />
//         </div>
//         <div className="title">
//           <h3>Chacking Accounts</h3>
//         </div>
//         <div className="text">
//           <p>
//             Enjoy easy and convenient access to your funds with our range of
//             checking account options. Benefit from features such as online and
//             mobile banking, debit cards, and free ATM access.
//           </p>
//         </div>{" "}
//       </div>{" "}
//       <div className="card">
//         <div className="img">
//           <img src={IconContainer1} alt="Icon Container" />
//         </div>
//         <div className="title">
//           <h3>Saving Accounts</h3>
//         </div>
//         <div className="text">
//           <p>
//             Build your savings with our competitive interest rates and flexible
//             savings account options. Whether you're saving for a specific goal
//             or want to grow your wealth over time, we have the right account for
//             you.
//           </p>
//         </div>
//       </div>
//       <div className="card">
//         <div className="img">
//           <img src={IconContainer2} alt="Icon Container" />
//         </div>
//         <div className="title">
//           <h3>Loans and Mortgages</h3>
//         </div>
//         <div className="text">
//           <p>
//             Realize your dreams with our flexible loan and mortgage options.
//             From personal loans to home mortgages, our experienced loan officers
//             are here to guide you through the application process and help you
//             secure the funds you need.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

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
