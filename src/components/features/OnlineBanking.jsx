// import '../style/Home.css';

// export default function OnlineBanking(){
//     return(
//       <div className="featuresContainer">
//         <div className="featureCard">
//           <h3>24/7 Account Access</h3>
//           <p>Enjoy the convenience of accessing your accounts anytime, anywhere through our secure online banking platform. Check balances, transfer funds, and pay bills with ease.</p>
//         </div>
//         <div className="featureCard">
//           <h3>Mobile Banking App</h3>
//           <p>Stay connected to your finances on the go with our user-friendly mobile banking app. Easily manage your accounts, deposit checks, and make payments from your smartphone or tablet.</p>
//         </div>
//         <div className="featureCard">
//           <h3>Secure Transactions</h3>
//           <p>Rest assured knowing that your transactions are protected by industry-leading security measures. We employ encryption and multi-factor authentication to safeguard your financial information.</p>
//         </div>
//         <div className="featureCard">
//           <h3>Bill Pay and Trnsfers</h3>
//           <p>Save time and avoid late fees with our convenient bill pay service. Set up recurring payments or make one-time transfers between your accounts with just a few clicks.</p>
//         </div>
//       </div>
//     )
// }

import "../style/Home.css";
import { useTranslation } from "react-i18next";

export default function OnlineBanking() {
  const { t } = useTranslation();

  const features = [
    {
      title: t("online_banking_access_title"),
      description: t("online_banking_access_desc"),
    },
    {
      title: t("online_banking_mobile_title"),
      description: t("online_banking_mobile_desc"),
    },
    {
      title: t("online_banking_secure_title"),
      description: t("online_banking_secure_desc"),
    },
    {
      title: t("online_banking_bill_title"),
      description: t("online_banking_bill_desc"),
    },
  ];

  return (
    <div className="featuresContainer">
      {features.map((feature, index) => (
        <div key={index} className="featureCard">
          <h3>{feature.title}</h3>
          <p>{feature.description}</p>
        </div>
      ))}
    </div>
  );
}
