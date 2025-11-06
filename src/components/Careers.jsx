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
