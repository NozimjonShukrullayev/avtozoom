import "./Footer.css";
import Logo from "../../assets/Logo.svg";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
const Footer = () => {
  const [data, setData] = useState([]);
  const {t} = useTranslation()
  const selectedLang = localStorage.getItem("language")

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://autoapi.dezinfeksiyatashkent.uz/api/categories"
      );

      if (response.ok) {
        const responseData = await response.json();
        setData(responseData.data);
      } else {
        console.log("Malumot olishda xatolik");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const  handleClick = () => {
    window.scrollTo({
      top:0
    })
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="footer-container">
      <div className="container">
        <div className="footer-cards">
          <div className="footer-card1">
            <div className="footer-logo">
              <Link to="/" onClick={handleClick}>
                <img src={Logo} alt="" />
              </Link>
            </div>
            <h2 className="footer-title">{t("footer-card1-title")}</h2>
            <span className="footer-descr">
              {t("footer-card1-desc")}
            </span>
            <a href="tel:+998903646903" className="footer-btn">
              {t("footer-card1-btn")}
            </a>
          </div>
          <div className="footer-card2">
            <div className="footer-cards2 cards2-card1">
              <div className="footer-card2">
                <Link to="/cars" className="footer-card2-title" onClick={handleClick}>
                  {t("nav-item1")}
                </Link>
                {data.map((item, index) => (
                  selectedLang === "en" ? (
                    <Link to={`/cars/${item.id}`} onClick={handleClick} className="cars" key={index}>
                    {item.name_en}
                  </Link>
                  ) : (
                    <Link to={`/cars/${item.id}`} onClick={handleClick} className="cars" key={index}>
                    {item.name_ru}
                  </Link>
                  )
                ))}
              </div>
              <div className="footer-card2">
                <Link to="/blog" onClick={handleClick} className="footer-card2-title">
                {t("nav-item6")}
                </Link>
                <Link to="/services" onClick={handleClick} className="footer-card2-title">
                {t("nav-item3")}
                </Link>
                <Link to="/contact" onClick={handleClick} className="footer-card2-title">
                {t("nav-item5")}
                </Link>
                <span className="cars contact-des">
                  Elite 3 Sports City, Dubai 26W8 24J, United Arab Emirates
                </span>
                <span className="cars">+971 55 8462124</span>
                <span className="cars">{t("footer-support")}: 24/7</span>
              </div>
              <div className="footer-card2 card2-card3">
                <div className="footer-about">
                  <Link to="/about-us" onClick={handleClick} className="footer-about-title">
                  {t("nav-item4")}
                  </Link>
                  <Link to="/faq" onClick={handleClick} className="footer-about-descr">
                  {t("footer-about-item2")}
                  </Link>
                </div>
                <div className="footer-follows">
                  <h2
                    className="footer-follows-title"
                  >
                    {t("footer-follows")}
                  </h2>
                  <div className="footer-follows-icons">
                    <FaInstagram className="footer-icon instagram" />
                    <FaFacebook className="footer-icon facebook" />
                    <FaYoutube className="footer-icon youtube" />
                  </div>
                </div>
              </div>
            </div>
            <hr className="footer-hr" />
            <div className="cards2-card2">
              <span className="license">
                &copy; {new Date().getFullYear()} {t("footer-card3-text1")}
              </span>
              <Link to="/terms_and_conditions" onClick={handleClick} className="conditions">
                {t("footer-card3-text2")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
