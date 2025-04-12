import { FaWhatsapp } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";

export const CarsList = ({ src, name, slug, text, model, id }) => {
  return (
    <Link className="vehicle-list" to={`/carsinfo/${id}`}>
      <li>
        <img
          className="vehicle-img"
          src={src}
          alt=""
          width={265}
          height={220}
        />
        <h3 className="vehicle-list-title">
          {name} <span>{model}</span>
        </h3>
        <h4 className="vehicle-list-text">
          AED {slug}
          <span className="vehicle-list-spn"> / $ {text}</span>
        </h4>
        <p className="vehicle-list-word">per day</p>
        <div className="vehicle-list-links">
          <a
            className="vehicle-list-btn"
            href="https://wa.me/971558462124"
            target="_blank"
          >
            <FaWhatsapp />
            WhatsApp
          </a>
          <a
            className="vehicle-list-btn"
            href="https://t.me/+971558462124"
            target="_blank"
          >
            <FaTelegram />
            Telegram
          </a>
        </div>
      </li>
    </Link>
  );
};
