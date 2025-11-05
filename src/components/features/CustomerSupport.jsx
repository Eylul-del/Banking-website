// import '../style/Home.css';

// export default function CustomerSupport() {
//   return (
//     <div className="featuresContainer">
//       <div className="featureCard">
//         <h3>24/7 Live Chat</h3>
//         <p>Get instant assistance from our support agents anytime through our live chat service—day or night, we’re here to help you.</p>
//       </div>
//       <div className="featureCard">
//         <h3>Dedicated Phone Support</h3>
//         <p>Reach our professional customer service team directly via phone for quick solutions to your banking questions or issues.</p>
//       </div>
//       <div className="featureCard">
//         <h3>Help Center</h3>
//         <p>Find detailed guides, FAQs, and video tutorials in our comprehensive Help Center to get step-by-step assistance whenever you need it.</p>
//       </div>
//       <div className="featureCard">
//         <h3>Feedback and Suggestions</h3>
//         <p>We value your feedback. Share your experience and suggestions to help us enhance our services and provide you with a better banking experience.</p>
//       </div>
//     </div>
//   );
// }

import "../style/Home.css";
import { useTranslation } from "react-i18next";

export default function CustomerSupport() {
  const { t } = useTranslation();

  const features = [
    {
      title: t("customer_support_livechat_title"),
      description: t("customer_support_livechat_desc"),
    },
    {
      title: t("customer_support_phone_title"),
      description: t("customer_support_phone_desc"),
    },
    {
      title: t("customer_support_helpcenter_title"),
      description: t("customer_support_helpcenter_desc"),
    },
    {
      title: t("customer_support_feedback_title"),
      description: t("customer_support_feedback_desc"),
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
