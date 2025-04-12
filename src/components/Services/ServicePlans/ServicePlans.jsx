import { Link, useParams } from "react-router-dom";
import "./ServicePlans.css";
import { useEffect, useState } from "react";
import serviceData from "../ServiceData";
import { useTranslation } from "react-i18next";
const ServicePlans = () => {
  const { link } = useParams();
  const [data, setData] = useState([]);
  const { t } = useTranslation();

  const selectedServiceItem = serviceData.find((item) => item.link === link);
  useEffect(() => {
    if (selectedServiceItem) {
      setData(selectedServiceItem.serviceItems);
    }
  }, [link]);

  const selectedLanguage = localStorage.getItem("language");

  return (
    <div className="serviceplans-container">
      {selectedLanguage === "en" ? (
        <Link to="/" className="plans-link">
          Luxury Cars for Rent in Dubai/ Services/{" "}
          {t(selectedServiceItem.title)}
        </Link>
      ) : (
        <Link to="/" className="plans-link">
          Аренда люксовых и спортивных авто/ Услуги/{" "}
          {t(selectedServiceItem.title)}
        </Link>
      )}
      <span className="plans-title">{t(selectedServiceItem.title)}</span>
      <div className="plans-cards">
        {data.map((item, index) => (
          <div className="plans-card" key={index}>
            <div className="plans-img">
              <img src={item.itemImage} alt="" />
            </div>
            <div className="item-abouts">
              <span className="basic">{t(item.basic)}</span>
              <div className="itemnumber">
                <span className="numb">{t(item.itemNumber)}</span>
                <span className="numbtext">{t(item.itemNumberText)}</span>
              </div>
              <span className="itemText">{t(item.itemText)}</span>
              <span className="itemTitle">{t(item.itemTitle)}</span>
              <div className="item-checkCards">
                <div className="item-checkCard">
                  <span className="checkimg">
                    <img src={item.itemCheckImage} alt="" />
                  </span>
                  <span className="check-text">{t(item.itemCheckText1)}</span>
                </div>
                <div className="item-checkCard">
                  <span className="checkimg">
                    <img src={item.itemCheckImage} alt="" />
                  </span>
                  <span className="check-text">{t(item.itemCheckText2)}</span>
                </div>
                <div className="item-checkCard">
                  <span className="checkimg">
                    <img src={item.itemCheckImage} alt="" />
                  </span>
                  <span className="check-text">{t(item.itemCheckText3)}</span>
                </div>
                <div className="item-checkCard">
                  <span className="checkimg">
                    <img src={item.itemCheckImage} alt="" />
                  </span>
                  <span className="check-text">{t(item.itemCheckText4)}</span>
                </div>
                <div className="item-checkCard">
                  <span className="checkimg">
                    <img src={item.itemCheckImage} alt="" />
                  </span>
                  <span className="check-text">{t(item.itemCheckText5)}</span>
                </div>
                <div className="item-checkCard">
                  <span className="checkimg">
                    <img src={item.itemCheckImage} alt="" />
                  </span>
                  <span className="check-text">{t(item.itemCheckText6)}</span>
                </div>
                <div className="item-checkCard">
                  <span className="checkimg">
                    <img src={item.itemCheckImage} alt="" />
                  </span>
                  <span className="check-text">{t(item.itemCheckText7)}</span>
                </div>
              </div>
              <div className="item-btn">
                <a
                  href="tel:+971(55)8462124"
                  className="check-btn"
                >
                  {t(item.itemBtn)}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicePlans;
