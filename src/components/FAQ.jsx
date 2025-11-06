import "../components/style/Home.css";
import { useTranslation } from "react-i18next";

export default function FAQ() {
  const { t } = useTranslation();

  const faqs = [
    {
      question: t("faq_q1"),
      answer: t("faq_a1"),
    },
    {
      question: t("faq_q2"),
      answer: t("faq_a2"),
    },
    {
      question: t("faq_q3"),
      answer: t("faq_a3"),
    },
    {
      question: t("faq_q4"),
      answer: t("faq_a4"),
    },
  ];

  return (
    <div className="popularQuestions">
      <div className="sectionHeader">
        <div className="text">
          <h2>
            <span>{t("faq_title_part1")}</span> {t("faq_title_part2")}
          </h2>
          <p>{t("faq_contact")}</p>
        </div>
      </div>

      <div className="questions">
        {faqs.map((faq, index) => (
          <div className="questionCard" key={index}>
            <div className="title">
              <h3>{faq.question}</h3>
            </div>
            <div className="text">
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
