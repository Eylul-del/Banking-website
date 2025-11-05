import "../components/style/Security.css";
import FAQ from "./FAQ.jsx";
import mainImage from "../assets/images/img/Security/mainImage.png";
import Icon from "../assets/images/img/Security/Icon Container.png";
import Icon1 from "../assets/images/img/Security/Icon Container (1).png";
import Icon2 from "../assets/images/img/Security/Icon Container (2).png";
import Icon3 from "../assets/images/img/Security/Icon Container (3).png";
import OurBenefitsCards from "./OurBenefitsCards.jsx";

export default function Security() {
  const protectionData = [
    {
      Icon: Icon,
      title: "Secure Online Banking Platform",
      description: `At YourBank, we prioritize the security and confidentiality of
        your financial information. Our state-of-the-art encryption
        technology and stringent data protection measures ensure your
        assets and transactions are safeguarded at all times.`,
    },
    {
      Icon: Icon1,
      title: "Multi-Factor Authentication",
      description: `To enhance the security of your online banking experience, we
        employ multi-factor authentication. This additional layer of
        security requires you to provide multiple pieces of
        identification, such as a password and a one-time verification
        code, to access your account.`,
    },
    {
      Icon: Icon2,
      title: "Fraud Monitoring",
      description: `We have sophisticated fraud detection systems in place to
        monitor your accounts for any suspicious activities. Our
        dedicated team works around the clock to detect and prevent
        unauthorized transactions, providing you with peace of mind.`,
    },
    {
      Icon: Icon3,
      title: "Secure Mobile Banking",
      description: `Our mobile banking app is designed with the same level of
        security as our online banking platform. You can confidently
        access your accounts, make transactions, and manage your
        finances on the go, knowing that your information is protected.`,
    },
  ];

  return (
    <div className="pageContainer">
      <main className="securityMain">
        <div className="mainTextcontent">
          <h1>
            Your Security is Our <span>Top Priority</span>
          </h1>
          <p>
            At YourBank, we understand the importance of keeping your financial
            information secure. We employ robust security measures and advanced
            technologies to protect your personal and financial data. Rest
            assured that when you bank with us, your security is our utmost
            priority.
          </p>
        </div>
        <div className="mainImg">
          <img src={mainImage} alt="Main Image" />
        </div>
      </main>

      <div className="protection">
        <div className="sectionHeader">
          <div className="text">
            <h2>
              How We <span>Protect You</span>
            </h2>
            <p>
              At YourBank, we prioritize the security and confidentiality of
              your financial information. Our state-of-the-art encryption
              technology and stringent data protection measures ensure your
              assets and transactions are safeguarded at all times.
            </p>
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
