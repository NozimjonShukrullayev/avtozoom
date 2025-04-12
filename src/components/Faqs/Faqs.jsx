import { useState } from "react";
import { useTranslation } from "react-i18next";
import { CiCircleChevDown, CiCircleChevRight } from "react-icons/ci";
import "./Faqs.css";

const Faqs = () => {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(null);

  const FaqsData = [
    {
      id: 1,
      question: t("home-faq-ques1"),
      answer: t("home-faq-ans1"),
    },
    {
      id: 2,
      question: t("home-faq-ques2"),
      answer: t("home-faq-ans2"),
    },
    {
      id: 3,
      question: t("home-faq-ques3"),
      answer: t("home-faq-ans3"),
    },
    {
      id: 4,
      question: t("home-faq-ques4"),
      answer: t("home-faq-ans4"),
    },
    {
      id: 5,
      question: t("home-faq-ques5"),
      answer: t("home-faq-ans5"),
    },
  ];
  const handleClickActive = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faqs-container">
      <div className="faq-cards">
        <span className="faq">{t("footer-about-item2")}</span>
        <div className="cards-faq">
          {FaqsData.map((faq, index) => (
            <>
              <div
                className="card-faq"
                key={index}
                onClick={() => handleClickActive(index)}
              >
                {activeIndex != index ? (
                  <CiCircleChevRight className="faq-icon" />
                ) : (
                  <CiCircleChevDown className="faq-icon" />
                )}
                <div className="faq-ans-ques">
                  <span className="ques">{faq.question}</span>
                  <span
                    className={`ans ${activeIndex === index ? "active" : ""}`}
                  >
                    {faq.answer}
                  </span>
                  <hr className="faq-hr" />
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faqs;
