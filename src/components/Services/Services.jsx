import "./services.css";
import { CiCircleChevRight } from "react-icons/ci";
import { Link } from "react-router-dom";
import serviceData from "./ServiceData";
import { useTranslation } from "react-i18next";
const Services = () => {
  const { t } = useTranslation();

  const selectedLang = localStorage.getItem("language");

  const scrollTop = () => {
    window.scrollTo({ top: 0 });
  };

  return (
    <div className="services-container">
      {selectedLang === "en" ? (
        <Link to="/" className="service-location">
          Luxury Cars for Rent in Dubai / Services
        </Link>
      ) : (
        <Link to="/" className="service-location">
          Аренда люксовых и спортивных авто / Услуги
        </Link>
      )}
      <span className="service-title">{t("nav-item3")}</span>
      <div className="services-cards">
        {serviceData.map((item, ind) => (
          <div className="services-card" key={ind}>
            <div className="service-img">
              <img src={item.img} alt="" />
            </div>
            <div className="service-about">
              <span className="about-title">{t(item.title)}</span>
              <span className="about-desc">{t(item.desc)}</span>
              <Link
                to={`/services/${item.link}`}
                onClick={scrollTop}
                className="about-btn"
              >
                {t(item.btn)} <CiCircleChevRight className="service-icon" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
