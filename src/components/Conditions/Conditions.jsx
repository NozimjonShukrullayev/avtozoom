import "./Conditions.css"
import { useTranslation } from "react-i18next";

const Conditions = () => {
  const { t } = useTranslation();

  return (
    <div id="conditions">
      <div className="container">
        <h3 className="conditions__title">{t("conditions-title")}</h3>
        <p className="conditions__description">{t("conditions-desc1")}</p>
        <ol>
          <li className="conditions__subtitle">
            {t("conditions-subtitle1")}
          </li>
          <p className="conditions__description">{t("conditions-desc2")}</p>
          <li className="conditions__subtitle">
            {t("conditions-subtitle2")}
          </li>
          <p className="conditions__description">{t("conditions-desc3")}</p>
          <li className="conditions__subtitle">
            {t("conditions-subtitle3")}
          </li>
          <p className="conditions__description">{t("conditions-desc4")}</p>
          <li className="conditions__subtitle">
            {t("conditions-subtitle4")}
          </li>
          <p className="conditions__description">{t("conditions-desc5")}</p>
          <li className="conditions__subtitle">
            {t("conditions-subtitle5")}
          </li>
          <p className="conditions__description">{t("conditions-desc6")}</p>
        </ol>
      </div>
    </div>
  )
}

export default Conditions;