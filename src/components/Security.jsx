import "../components/style/Security.css";
import FAQ from "./FAQ.jsx";
import mainImage from "../assets/images/img/Security/mainImage.png";
import Icon from "../assets/images/img/Security/Icon Container.png";
import Icon1 from "../assets/images/img/Security/Icon Container (1).png";
import Icon2 from "../assets/images/img/Security/Icon Container (2).png";
import Icon3 from "../assets/images/img/Security/Icon Container (3).png";
export default function Security() {
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
              assets and transactions are safeguarded at all times
            </p>
          </div>
        </div>
        <div className="sectionCards">
          <div className="card">
            <div className="title">
              <img src={Icon} alt="Icon " />
              <h3>Secure Online Banking Platform</h3>
            </div>
            <div className="cardContent">
              <p>
                Our online banking platform is built with multiple layers of
                security to safeguard your information. We utilize
                industry-standard encryption protocols to ensure that your data
                remains confidential and protected during transmission.
              </p>
            </div>
          </div>
          <div className="card">
            <div className="title">
              <img src={Icon1} alt="Icon " />
              <h3>Multi-Factor Authentication</h3>
            </div>
            <div className="cardContent">
              <p>
                To enhance the security of your online banking experience, we
                employ multi-factor authentication. This additional layer of
                security requires you to provide multiple pieces of
                identification, such as a password and a one-time verification
                code, to access your account.
              </p>
            </div>
          </div>
          <div className="card">
            <div className="title">
              <img src={Icon2} alt="Icon " />
              <h3>Fraud Monitoring</h3>
            </div>
            <div className="cardContent">
              <p>
                We have sophisticated fraud detection systems in place to
                monitor your accounts for any suspicious activities. Our
                dedicated team works around the clock to detect and prevent
                unauthorized transactions, providing you with peace of mind.
              </p>
            </div>
          </div>
          <div className="card">
            <div className="title">
              <img src={Icon3} alt="Icon " />
              <h3>Secure Mobile Banking</h3>
            </div>
            <div className="cardContent">
              <p>
                Our mobile banking app is designed with the same level of
                security as our online banking platform. You can confidently
                access your accounts, make transactions, and manage your
                finances on the go, knowing that your information is protected.
              </p>
            </div>
          </div>
        </div>
      </div>

      <FAQ />
    </div>
  );
}
