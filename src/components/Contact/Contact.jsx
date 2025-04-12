import { Link } from "react-router-dom";
import { CiLocationOn, CiPhone } from "react-icons/ci";
import { SlEnvolopeLetter } from "react-icons/sl";
import "./Contact.css";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
  const selectedLang = localStorage.getItem("language");

  return (
    <div className="contact-container">
      <div className="contacts">
        {selectedLang === "en" ? (
          <Link to="/" className="contact-link">
            Luxury Cars for Rent in Dubai / Contacts
          </Link>
        ) : (
          <Link to="/" className="contact-link">
            Аренда люксовых и спортивных авто / Контакты
          </Link>
        )}
        <span className="contact-title">{t("contact-text1")}</span>

        <div className="texts">
          <p className="contact-text">{t("contact-text2")}</p>
          <p className="contact-text">{t("contact-text3")}</p>
        </div>
        <div className="contact-cards">
          <div className="contact-card">
            <span className="contact-card-title">{t("contact-text4")}</span>
            <div className="contact-card-link">
              <CiLocationOn className="link-icons" />
              <span className="links">
                Elite 3 Sports City, Dubai 26W8 24J, United Arab Emirates
              </span>
            </div>
            <div className="contact-card-link">
              <CiPhone className="link-icons" />
              <a href="tel:+971558462124" className="links">
                +971 (55) 846 21 24
              </a>
            </div>
            <div className="contact-card-link">
              <SlEnvolopeLetter className="link-icons" />
              <a
                href="mailto:office@autozoomrental.com"
                className="links"
              >
                office@autozoomrental.com
              </a>
            </div>
          </div>
          <hr />
          <div className="iframe-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d14458.729499590072!2d55.215299!3d25.044851!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjXCsDAyJzQxLjUiTiA1NcKwMTInNTUuMSJF!5e0!3m2!1sen!2sus!4v1714817439223!5m2!1sen!2sus"
              allowfullscreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
