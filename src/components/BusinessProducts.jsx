// import IconContainer11 from "../assets/images/icon/Icon Container (11).png";
// import IconContainer1 from "../assets/images/icon/Icon Container (1).png";
// import IconContainer2 from "../assets/images/icon/Icon Container (2).png";

// export default function BusinessProducts() {
//   return (
//     <div className="productsCards">
//       <div className="card">
//         <div className="img">
//           <img src={IconContainer11} alt="Icon Container" />
//         </div>
//         <div className="title">
//           <h3>Business Accounts</h3>
//         </div>
//         <div className="text">
//           <p>
//             Simplify your company’s finances with our business account options.
//             Enjoy seamless online banking, bulk payments, and tools for managing
//             expenses and cash flow efficiently.
//           </p>
//         </div>
//       </div>

//       <div className="card">
//         <div className="img">
//           <img src={IconContainer1} alt="Icon Container" />
//         </div>
//         <div className="title">
//           <h3>Merchant Services</h3>
//         </div>
//         <div className="text">
//           <p>
//             Accept payments easily with our secure merchant solutions. From
//             modern POS systems to online payment gateways, we help your business
//             get paid faster and more securely.
//           </p>
//         </div>
//       </div>

//       <div className="card">
//         <div className="img">
//           <img src={IconContainer2} alt="Icon Container" />
//         </div>
//         <div className="title">
//           <h3>Commercial Loans</h3>
//         </div>
//         <div className="text">
//           <p>
//             Power your growth with flexible financing options. Whether expanding
//             operations, upgrading equipment, or managing short-term expenses,
//             our commercial loans support your goals.
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

export default function BusinessProducts() {
  const { t } = useTranslation();

  const products = [
    {
      Icon: IconContainer11,
      title: t("business_products_accounts_title"),
      description: t("business_products_accounts_desc"),
    },
    {
      Icon: IconContainer1,
      title: t("business_products_merchant_title"),
      description: t("business_products_merchant_desc"),
    },
    {
      Icon: IconContainer2,
      title: t("business_products_loans_title"),
      description: t("business_products_loans_desc"),
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
