import { Link } from "react-router-dom"
import "./Main.css"
import { CiCircleChevRight } from "react-icons/ci"
import { useTranslation } from "react-i18next"
const Main = () => {
  const {t} = useTranslation()

  const handleTop = () => {
    window.scrollTo({
      top:0
    })
  }

  return (
    <div className="main-container">
      <div className="main-card">
        <h2 className="main-title">{t("home-main-title")}</h2>
        <p className="main-desc">
        {t("home-main-desc")}
        </p>
        <Link to="/cars" onClick={handleTop} className="main-btn">{t("home-main-btn")} <CiCircleChevRight className="main-icon" /></Link>
      </div>
    </div>
  )
}

export default Main