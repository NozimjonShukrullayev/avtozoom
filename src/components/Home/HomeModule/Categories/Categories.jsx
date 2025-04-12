import { Link } from "react-router-dom";
import "./Categories.css";
import Lambo from "../../../../assets/lambo2.webp"
import { CiCircleChevRight } from "react-icons/ci";
import { useTranslation } from "react-i18next";
const Categories = () => {
  const {t} = useTranslation()

  const handleTop = () => {
    window.scrollTo({
      top:0
    })
  }

  return (
    <div className="category-container">
      <div className="category-cards1">
        <div className="category-card1">
          <span className="category-title">{t("home-category-card1-title")}</span>
          <span className="category-desc">
            {t("home-category-card1-desc")}
          </span>
        </div>
        <div className="category-card1">
          <span className="category-title">
            {t("home-category-card1-title2")}
          </span>
          <span className="category-desc">
            {t("home-category-card1-desc2")}
          </span>
        </div>
      </div>
      <div className="category-cards2">
        <div className="category-card2 youtubeCard">
        <div className="youtube-container">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/6Bcg46rxqAE?si=M3xOWMVXL18pCNZY"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
            className="iframe-video"
          ></iframe>
        </div>
        <div className="video-content">
          <span className="content-title">{t("home-category-card2-title1")}</span>
          <span className="video-desc">
            {t("home-category-card2-desc1")}
          </span>
          <Link to="/cars" onClick={handleTop} className="video-btn">{t("home-category-card2-btn1")} <CiCircleChevRight className="video-icon" /> </Link>
        </div>
        </div>
        <div className="category-card2 lambo-cont">
          <div className="img-cont">
            <img src={Lambo} alt="" />
          </div>
          <div className="lambo-content">
            <span className="lambo-title">{t("home-category-card2-title2")}</span>
            <span className="lambo-desc">{t("home-category-card2-desc2")}</span>
            <Link to="/cars" onClick={handleTop} className="lambo-btn">{t("home-category-card2-btn2")} <CiCircleChevRight className="video-icon" /></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
