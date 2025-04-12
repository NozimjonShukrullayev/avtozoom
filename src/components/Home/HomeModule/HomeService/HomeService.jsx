import "./HomeService.css"
import { CiCircleChevRight } from "react-icons/ci"
import { Link } from "react-router-dom"
import serviceData from "../../../Services/ServiceData"
import { useTranslation } from "react-i18next"
const HomeService = () => {

  const {t} = useTranslation()

  const scrollTop = () => {
    window.scrollTo({ top: 0 });
  }

  return (
    <div className="homeService-container">
      <span className="home-service-title">{t("nav-item3")}</span>
      <div className="home-services-cards">
        {
          serviceData.map((item,ind) => (
            <div className="home-services-card" key={ind}>
          <div className="home-service-img">
            <img src={item.img} alt="" />
          </div>
          <div className="home-service-about">
            <span className="home-about-title">{t(item.title)}</span>
            <span className="home-about-desc">{t(item.desc)}</span>
            <Link to={`/services/${item.link}`} onClick={scrollTop} className="home-about-btn">{t(item.btn)} <CiCircleChevRight className="home-service-icon" /></Link>
          </div>
        </div>
          ))
        }
      </div>
    </div>
  )
}

export default HomeService