// import { Link } from "react-router-dom";
// import "../components/style/Carees.css";
// import FAQ from "./FAQ.jsx";
// import OpenAccount from "./OpenAccount.jsx";
// import mainImage from "../assets/images/img/Careers/mainImage.png";
// import IconContainer from "../assets/images/img/Careers/Icon Container.png";
// import IconContainer1 from "../assets/images/img/Careers/Icon Container (1).png";
// import IconContainer2 from "../assets/images/img/Careers/Icon Container (2).png";
// import IconContainer3 from "../assets/images/img/Careers/Icon Container (3).png";
// import Icon from "../assets/images/img/Careers/Icon.png";
// import ValueCard from "./OurValueCard.jsx";
// import OurBenefitsCards from "./OurBenefitsCards.jsx";
// import JobOpeningCards from "./JobOpeningCards.jsx";
// export default function Careers() {
//   const valueCards = [
//     {
//       title: "Integrity",
//       description:
//         "We conduct ourselves with utmost honesty, transparency, and ethical behavior. We believe in doing what is right for our customers, colleagues, and stakeholders, even when faced with difficult choices.",
//     },
//     {
//       title: "Customer Centricity",
//       description:
//         "Our customers are at the heart of everything we do. We are dedicated to understanding their needs, providing personalized solutions, and delivering exceptional service that exceeds expectations.",
//     },
//     {
//       title: "Collaboration",
//       description:
//         "We foster a collaborative and inclusive work environment, where teamwork and diversity are celebrated. By leveraging the unique strengths and perspectives of our employees, we drive innovation and achieve greater success together.",
//     },
//     {
//       title: "Innovation",
//       description:
//         "We embrace change and constantly seek innovative solutions to meet the evolving needs of our customers.",
//     },
//   ];

//   const benefitsCards = [
//     {
//       Icon: IconContainer,
//       title: "Competitive Compensation",
//       description:
//         "We provide a competitive salary package that recognizes the skills and expertise of our employees. YourBank believes in rewarding exceptional performance and offering opportunities for financial growth.",
//     },
//     {
//       Icon: IconContainer1,
//       title: "Health and Wellness",
//       description:
//         "We prioritize the health and well-being of our employees by providing comprehensive medical, dental, and vision insurance plans. We also offer wellness programs, gym memberships, and resources to support a healthy lifestyle.",
//     },
//     {
//       Icon: IconContainer2,
//       title: "Retirement Planning",
//       description:
//         "YourBank is committed to helping employees plan for their future. We offer a retirement savings plan with a generous employer match to help them build a secure financial foundation for the long term.",
//     },
//     {
//       Icon: IconContainer3,
//       title: "Work-Life Balance",
//       description:
//         "We understand the importance of maintaining a healthy work-life balance. YourBank offers flexible work arrangements, paid time off, parental leave, and other programs that support employees in managing their personal and professional commitments.",
//     },
//   ];

//   const jobDataCards = [
//     {
//       title: "Relationship Manager",
//       location: "India",
//       department: "Retail Banking",
//       about: `As a Relationship Manager at YourBank, you will be responsible
//               for developing and maintaining relationships with our valued
//               customers. You will proactively identify their financial needs
//               and offer tailored solutions to help them achieve their goals.
//               We are seeking individuals with excellent communication
//               skills, a strong sales acumen, and a passion for delivering
//               exceptional customer service.`,
//       requirements: [
//         "Bachelor's degree in Business, Finance, or a related field",
//         "Minimum of 3 years of experience in sales or relationship management in the banking industry",
//         "Proven track record of meeting and exceeding sales targets",
//         "Excellent interpersonal and negotiation skills",
//         "Strong knowledge of banking products and services",
//       ],
//     },
//     {
//       title: "Risk Analyst",
//       location: "India",
//       department: "Risk Management",
//       about: `As a Risk Analyst at YourBank, you will play a vital role in
//               identifying and assessing potential risks to our organization.
//               You will analyze data, conduct risk assessments, and develop
//               strategies to mitigate risks. We are looking for
//               detail-oriented individuals with strong analytical skills and
//               a solid understanding of risk management principles.`,
//       requirements: [
//         "Bachelor's degree in Finance, Economics, or a related field",
//         "Minimum of 2 years of experience in risk management or a similar role",
//         "Proficiency in risk analysis tools and techniques",
//         "Strong analytical and problem-solving skills",
//         "Knowledge of regulatory requirements and industry best practices",
//       ],
//     },
//     {
//       title: "IT Security Specialist",
//       location: "India",
//       department: "Information Technology",
//       about: `As an IT Security Specialist at YourBank, you will be
//               responsible for ensuring the security and integrity of our
//               information systems. You will develop and implement security
//               protocols, conduct vulnerability assessments, and respond to
//               security incidents. We are seeking individuals with a strong
//               technical background, knowledge of cybersecurity best
//               practices, and a commitment to maintaining the confidentiality
//               of customer data.`,
//       requirements: [
//         "Bachelor's degree in Computer Science, Information Security, or a related field",
//         "Minimum of 5 years of experience in IT security or a similar role",
//         "In-depth knowledge of network security protocols and technologies",
//         "Familiarity with regulatory frameworks such as PCI DSS and GDPR",
//         "Professional certifications such as CISSP or CISM are preferred",
//       ],
//     },
//   ];

//   return (
//     <div className="pageContainer">
//       <main className="careerMain">
//         <div className="mainTextcontent">
//           <h1>
//             Welcome to <span>YourBank</span> Careers !
//           </h1>
//           <p>
//             Join our team and embark on a rewarding journey in the banking
//             industry. At YourBank, we are committed to fostering a culture of
//             excellence and providing opportunities for professional growth. With
//             a focus on innovation, customer service, and integrity, we strive to
//             make a positive impact in the lives of our customers and
//             communities. Join us today and be a part of our mission to shape the
//             future of banking.
//           </p>
//         </div>
//         <div className="mainImg">
//           <img src={mainImage} alt="Main Image" />
//         </div>
//       </main>

//       <div className="ourValues">
//         <div className="sectionHeader">
//           <div className="text">
//             <h2>
//               <span>Our </span>Values
//             </h2>
//             <p>
//               At YourBank, our values form the foundation of our organization
//               and guide our actions. We believe in upholding the highest
//               standards of integrity, delivering exceptional service, and
//               embracing innovation. These values define our culture and shape
//               the way we work together to achieve our goals.
//             </p>
//           </div>
//         </div>

//         <div className="sectionCards">
//           {valueCards.map((c, i) => (
//             <ValueCard key={i} title={c.title} description={c.description} />
//           ))}
//         </div>
//       </div>

//       <div className="ourBenefits">
//         <div className="sectionHeader">
//           <div className="text">
//             <h2>
//               <span>Our </span>Benefits
//             </h2>
//             <p>
//               At YourBank, we value our employees and are dedicated to their
//               well-being and success. We offer a comprehensive range of benefits
//               designed to support their personal and professional growth.
//             </p>
//           </div>
//         </div>

//         <div className="sectionCards">
//           {benefitsCards.map((c, i) => (
//             <OurBenefitsCards
//               key={i}
//               Icon={c.Icon}
//               title={c.title}
//               description={c.description}
//             />
//           ))}
//         </div>
//       </div>

//       <div className="jobOpenings">
//         <div className="sectionHeader">
//           <div className="text">
//             <h2>
//               <span>Job </span>Openings
//             </h2>
//             <p>
//               Explore exciting job openings at YourBank, where we value talent,
//               innovation, and a passion for customer service. Join our team and
//               be part of shaping a brighter future in the banking industry
//             </p>
//           </div>
//         </div>

//         <div className="jobs">
//           {jobDataCards.map((job, index) => (
//             <JobOpeningCards
//               key={index}
//               title={job.title}
//               location={job.location}
//               department={job.department}
//               about={job.about}
//               requirements={job.requirements}
//               icon={Icon}
//             />
//           ))}
//         </div>
//       </div>

//       <FAQ />
//       <OpenAccount />
//     </div>
//   );
// }

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
import ValueCard from "./OurValueCard.jsx";
import OurBenefitsCards from "./OurBenefitsCards.jsx";
import JobOpeningCards from "./JobOpeningCards.jsx";
import { useTranslation } from "react-i18next";

export default function Careers() {
  const { t } = useTranslation();

  const valueCards = [
    {
      title: t("careers_values_integrity_title"),
      description: t("careers_values_integrity_desc"),
    },
    {
      title: t("careers_values_customer_title"),
      description: t("careers_values_customer_desc"),
    },
    {
      title: t("careers_values_collaboration_title"),
      description: t("careers_values_collaboration_desc"),
    },
    {
      title: t("careers_values_innovation_title"),
      description: t("careers_values_innovation_desc"),
    },
  ];

  const benefitsCards = [
    {
      Icon: IconContainer,
      title: t("careers_benefits_compensation_title"),
      description: t("careers_benefits_compensation_desc"),
    },
    {
      Icon: IconContainer1,
      title: t("careers_benefits_health_title"),
      description: t("careers_benefits_health_desc"),
    },
    {
      Icon: IconContainer2,
      title: t("careers_benefits_retirement_title"),
      description: t("careers_benefits_retirement_desc"),
    },
    {
      Icon: IconContainer3,
      title: t("careers_benefits_worklife_title"),
      description: t("careers_benefits_worklife_desc"),
    },
  ];

  const jobDataCards = [
    {
      title: t("careers_job_relmanager_title"),
      location: t("careers_job_location_india"),
      department: t("careers_job_department_retail"),
      about: t("careers_job_relmanager_about"),
      requirements: [
        t("careers_job_relmanager_req1"),
        t("careers_job_relmanager_req2"),
        t("careers_job_relmanager_req3"),
        t("careers_job_relmanager_req4"),
        t("careers_job_relmanager_req5"),
      ],
    },
    {
      title: t("careers_job_riskanalyst_title"),
      location: t("careers_job_location_india"),
      department: t("careers_job_department_risk"),
      about: t("careers_job_riskanalyst_about"),
      requirements: [
        t("careers_job_riskanalyst_req1"),
        t("careers_job_riskanalyst_req2"),
        t("careers_job_riskanalyst_req3"),
        t("careers_job_riskanalyst_req4"),
        t("careers_job_riskanalyst_req5"),
      ],
    },
    {
      title: t("careers_job_itsecurity_title"),
      location: t("careers_job_location_india"),
      department: t("careers_job_department_it"),
      about: t("careers_job_itsecurity_about"),
      requirements: [
        t("careers_job_itsecurity_req1"),
        t("careers_job_itsecurity_req2"),
        t("careers_job_itsecurity_req3"),
        t("careers_job_itsecurity_req4"),
        t("careers_job_itsecurity_req5"),
      ],
    },
  ];

  return (
    <div className="pageContainer">
      <main className="careerMain">
        <div className="mainTextcontent">
          <h1>
            {t("careers_main_title")}{" "}
            <span>{t("careers_main_title_span")}</span>!
          </h1>
          <p>{t("careers_main_paragraph")}</p>
        </div>
        <div className="mainImg">
          <img src={mainImage} alt={t("careers_main_img_alt")} />
        </div>
      </main>

      <div className="ourValues">
        <div className="sectionHeader">
          <div className="text">
            <h2>
              <span>{t("careers_values_title_span")}</span>{" "}
              {t("careers_values_title")}
            </h2>
            <p>{t("careers_values_paragraph")}</p>
          </div>
        </div>

        <div className="sectionCards">
          {valueCards.map((c, i) => (
            <ValueCard key={i} title={c.title} description={c.description} />
          ))}
        </div>
      </div>

      <div className="ourBenefits">
        <div className="sectionHeader">
          <div className="text">
            <h2>
              <span>{t("careers_benefits_title_span")}</span>{" "}
              {t("careers_benefits_title")}
            </h2>
            <p>{t("careers_benefits_paragraph")}</p>
          </div>
        </div>

        <div className="sectionCards">
          {benefitsCards.map((c, i) => (
            <OurBenefitsCards
              key={i}
              Icon={c.Icon}
              title={c.title}
              description={c.description}
            />
          ))}
        </div>
      </div>

      <div className="jobOpenings">
        <div className="sectionHeader">
          <div className="text">
            <h2>
              <span>{t("careers_jobs_title_span")}</span>{" "}
              {t("careers_jobs_title")}
            </h2>
            <p>{t("careers_jobs_paragraph")}</p>
          </div>
        </div>

        <div className="jobs">
          {jobDataCards.map((job, index) => (
            <JobOpeningCards
              key={index}
              title={job.title}
              location={job.location}
              department={job.department}
              about={job.about}
              requirements={job.requirements}
              icon={Icon}
            />
          ))}
        </div>
      </div>

      <FAQ />
      <OpenAccount />
    </div>
  );
}
