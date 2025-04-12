import { Link } from "react-router-dom";
import "./About.css";
import { useTranslation } from "react-i18next";
const About = () => {
  const { t } = useTranslation();
  const selectedLang = localStorage.getItem("language");

  return (
    <div className="about-container">
      <div className="abouts">
        {selectedLang === "en" ? (
          <Link to="/" className="about-link">
            Luxury Cars for Rent in Dubai / About Us
          </Link>
        ) : (
          <Link to="/" className="about-link">
            Аренда люксовых и спортивных авто / О нас
          </Link>
        )}
        <span className="about-title">{t("nav-item4")}</span>
        <div className="about-cards">
          <div className="about-card">
            <span className="about-card-title">{t("about-text1")}</span>
            <span className="about-card-desc">{t("about-text2")}</span>
          </div>
          <div className="about-card">
            <span className="about-card-title">{t("about-text3")}</span>
            <span className="about-card-desc">
              <b className="about-bold">{t("about-text4")}</b>
              {t("about-text5")}
            </span>
            <span className="about-card-desc">
              <b className="about-bold">{t("about-text6")}</b>
              {t("about-text7")}
            </span>
            <span className="about-card-desc">
              <b className="about-bold">{t("about-text8")}</b>
              {t("about-text9")}
            </span>
            <span className="about-card-desc">
              <b className="about-bold">{t("about-text10")}</b>
              {t("about-text11")}
            </span>
          </div>
          <div className="about-card mission">
            <span className="about-card-title">{t("about-text12")}</span>
            <span className="about-card-desc">{t("about-text13")}</span>
          </div>
          <div className="about-card">
            <span className="about-card-title">{t("about-text14")}</span>
            <span className="about-card-desc">{t("about-text15")}</span>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default About;
