import { Link } from "react-router-dom";
import "../components/style/Carees.css";
import FAQ from "./FAQ.jsx";
import OpenAccount from "./OpenAccount.jsx";
import mainImage from "../assets/images/img/Careers/mainImage.png";
import IconContainer from "../assets/images/img/Careers/Icon Container.png";
import IconContainer1 from "../assets/images/img/Careers/Icon Container (1).png";
import IconContainer2 from "../assets/images/img/Careers/Icon Container (2).png";
import IconContainer3 from "../assets/images/img/Careers/Icon Container (3).png";
import Icon from "../assets/images/img/Careers/Icon.png";

export default function Careers() {
  return (
    <div className="pageContainer">
      <main className="careerMain">
        <div className="mainTextcontent">
          <h1>
            Welcome to <span>YourBank</span> Careers !
          </h1>
          <p>
            Join our team and embark on a rewarding journey in the banking
            industry. At YourBank, we are committed to fostering a culture of
            excellence and providing opportunities for professional growth. With
            a focus on innovation, customer service, and integrity, we strive to
            make a positive impact in the lives of our customers and
            communities. Join us today and be a part of our mission to shape the
            future of banking.
          </p>
        </div>
        <div className="mainImg">
          <img src={mainImage} alt="Main Image" />
        </div>
      </main>

      <div className="ourValues">
        <div className="sectionHeader">
          <div className="text">
            <h2>
              <span>Our </span>Values
            </h2>
            <p>
              At YourBank, our values form the foundation of our organization
              and guide our actions. We believe in upholding the highest
              standards of integrity, delivering exceptional service, and
              embracing innovation. These values define our culture and shape
              the way we work together to achieve our goals.
            </p>
          </div>
        </div>

        <div className="sectionCards">
          <div className="card">
            <h2>Integrity</h2>
            <p>
              We conduct ourselves with utmost honesty, transparency, and
              ethical behavior. We believe in doing what is right for our
              customers, colleagues, and stakeholders, even when faced with
              difficult choices.
            </p>
          </div>
          <div className="card">
            <h2>Customer Centricity</h2>
            <p>
              Our customers are at the heart of everything we do. We are
              dedicated to understanding their needs, providing personalized
              solutions, and delivering exceptional service that exceeds
              expectations.
            </p>
          </div>
          <div className="card">
            <h2>Collaboration</h2>
            <p>
              We foster a collaborative and inclusive work environment, where
              teamwork and diversity are celebrated. By leveraging the unique
              strengths and perspectives of our employees, we drive innovation
              and achieve greater success together.
            </p>
          </div>
          <div className="card">
            <h2>Innovation</h2>
            <p>
              We embrace change and constantly seek innovative solutions to meet
              the evolving needs of our customers. We encourage our employees to
              think creatively, challenge conventions, and explore new ideas to
              drive the future of banking.
            </p>
          </div>
        </div>
      </div>

      <div className="ourBenefits">
        <div className="sectionHeader">
          <div className="text">
            <h2>
              <span>Our </span>Benefits
            </h2>
            <p>
              At YourBank, we value our employees and are dedicated to their
              well-being and success. We offer a comprehensive range of benefits
              designed to support their personal and professional growth.
            </p>
          </div>
        </div>

        <div className="sectionCards">
          <div className="card">
            <div className="title">
              <img src={IconContainer} alt="icon container" />
              <h3>Competitive Compensation</h3>
            </div>
            <div className="cardContent">
              <p>
                We provide a competitive salary package that recognizes the
                skills and expertise of our employees. YourBank believes in
                rewarding exceptional performance and offering opportunities for
                financial growth.
              </p>
            </div>
          </div>
          <div className="card">
            <div className="title">
              <img src={IconContainer1} alt="icon container" />
              <h3>Health and Wellness</h3>
            </div>
            <div className="cardContent">
              <p>
                We prioritize the health and well-being of our employees by
                providing comprehensive medical, dental, and vision insurance
                plans. We also offer wellness programs, gym memberships, and
                resources to support a healthy lifestyle.
              </p>
            </div>
          </div>
          <div className="card">
            <div className="title">
              <img src={IconContainer2} alt="icon container" />
              <h3>Retirement Planning</h3>
            </div>
            <div className="cardContent">
              <p>
                YourBank is committed to helping employees plan for their
                future. We offer a retirement savings plan with a generous
                employer match to help them build a secure financial foundation
                for the long term.
              </p>
            </div>
          </div>
          <div className="card">
            <div className="title">
              <img src={IconContainer3} alt="icon container" />
              <h3>Work-Life Balance</h3>
            </div>
            <div className="cardContent">
              <p>
                We understand the importance of maintaining a healthy work-life
                balance. YourBank offers flexible work arrangements, paid time
                off, parental leave, and other programs that support employees
                in managing their personal and professional commitments.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="jobOpenings">
        <div className="sectionHeader">
          <div className="text">
            <h2>
              <span>Job </span>Openings
            </h2>
            <p>
              Explore exciting job openings at YourBank, where we value talent,
              innovation, and a passion for customer service. Join our team and
              be part of shaping a brighter future in the banking industry
            </p>
          </div>
        </div>

        <div className="jobs">
          <div className="jobCard">
            <div className="aboutJob">
              <h3>Relationship Manager</h3>
              <div className="jobTags">
                <span className="tag">Location: India</span>
                <span className="tag"> Department: Retail Banking</span>
              </div>
              <div>
                <h3>About This Job</h3>
                <p>
                  As a Relationship Manager at YourBank, you will be responsible
                  for developing and maintaining relationships with our valued
                  customers. You will proactively identify their financial needs
                  and offer tailored solutions to help them achieve their goals.
                  We are seeking individuals with excellent communication
                  skills, a strong sales acumen, and a passion for delivering
                  exceptional customer service.
                </p>
              </div>
            </div>
            <div className="jobRequiermentsContainer">
              <div className="jobRequierments">
                <h3>Requirements & Qualifications</h3>
                <ul>
                  <li>
                    <img src={Icon} alt="icon" />
                    <p>
                      Bachelor's degree in Business, Finance, or a related field
                    </p>
                  </li>
                  <li>
                    <img src={Icon} alt="icon" />
                    <p>
                      Minimum of 3 years of experience in sales or relationship
                      management in the banking industry
                    </p>
                  </li>
                  <li>
                    <img src={Icon} alt="icon" />
                    <p>
                      Proven track record of meeting and exceeding sales targets
                    </p>
                  </li>
                  <li>
                    <img src={Icon} alt="icon" />
                    <p>Excellent interpersonal and negotiation skills</p>
                  </li>
                  <li>
                    <img src={Icon} alt="icon" />
                    <p>Strong knowledge of banking products and services</p>
                  </li>
                </ul>
              </div>
              <button className="applyBtn">
                <Link to="/signUp">Apply Now</Link>
              </button>
            </div>
          </div>
          <div className="jobCard">
            <div className="aboutJob">
              <h3>Risk Analyst</h3>
              <div className="jobTags">
                <span className="tag">Location: India</span>
                <span className="tag"> Department: Risk Management</span>
              </div>
              <div>
                <h3>About This Job</h3>
                <p>
                  As a Risk Analyst at YourBank, you will play a vital role in
                  identifying and assessing potential risks to our organization.
                  You will analyze data, conduct risk assessments, and develop
                  strategies to mitigate risks. We are looking for
                  detail-oriented individuals with strong analytical skills and
                  a solid understanding of risk management principles.
                </p>
              </div>
            </div>
            <div className="jobRequiermentsContainer">
              <div className="jobRequierments">
                <h3>Requirements & Qualifications</h3>
                <ul>
                  <li>
                    <img src={Icon} alt="icon" />
                    <p>
                      Bachelor's degree in Finance, Economics, or a related
                      field
                    </p>
                  </li>
                  <li>
                    <img src={Icon} alt="icon" />
                    <p>
                      Minimum of 2 years of experience in risk management or a
                      similar role
                    </p>
                  </li>
                  <li>
                    <img src={Icon} alt="icon" />
                    <p>Proficiency in risk analysis tools and techniques</p>
                  </li>
                  <li>
                    <img src={Icon} alt="icon" />
                    <p>Strong analytical and problem-solving skills</p>
                  </li>
                  <li>
                    <img src={Icon} alt="icon" />
                    <p>
                      Knowledge of regulatory requirements and industry best
                      practices
                    </p>
                  </li>
                </ul>
              </div>
              <button className="applyBtn">
                <Link to="/singUp">Apply Now</Link>
              </button>
            </div>
          </div>
          <div className="jobCard">
            <div className="aboutJob">
              <h3>IT Security Specialist</h3>
              <div className="jobTags">
                <span className="tag">Location: India</span>
                <span className="tag"> Department: Information Technology</span>
              </div>
              <div className="aboutJob">
                <h3>About This Job</h3>
                <p>
                  As an IT Security Specialist at YourBank, you will be
                  responsible for ensuring the security and integrity of our
                  information systems. You will develop and implement security
                  protocols, conduct vulnerability assessments, and respond to
                  security incidents. We are seeking individuals with a strong
                  technical background, knowledge of cybersecurity best
                  practices, and a commitment to maintaining the confidentiality
                  of customer data.
                </p>
              </div>
            </div>
            <div className="jobRequiermentsContainer">
              <div className="jobRequierments">
                <h3>Requirements & Qualifications</h3>
                <ul>
                  <li>
                    <img src={Icon} alt="icon" />
                    <p>
                      Bachelor's degree in Computer Science, Information
                      Security, or a related field
                    </p>
                  </li>
                  <li>
                    <img src={Icon} alt="icon" />
                    <p>
                      Minimum of 5 years of experience in IT security or a
                      similar role
                    </p>
                  </li>
                  <li>
                    <img src={Icon} alt="icon" />
                    <p>
                      In-depth knowledge of network security protocols and
                      technologies
                    </p>
                  </li>
                  <li>
                    <img src={Icon} alt="icon" />
                    <p>
                      Familiarity with regulatory frameworks such as PCI DSS and
                      GDPR
                    </p>
                  </li>
                  <li>
                    <img src={Icon} alt="icon" />
                    <p>
                      Professional certifications such as CISSP or CISM are
                      preferred
                    </p>
                  </li>
                </ul>
              </div>
              <button className="applyBtn">
                <Link to="/singUp">Apply Now</Link>
              </button>
            </div>
          </div>
        </div>
      </div>

      <FAQ />
      <OpenAccount />
    </div>
  );
}
