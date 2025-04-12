import { FaBars, FaSearch } from "react-icons/fa";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import "./Navbar.css";
import Logo from "../../assets/Logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { FilteredCarsContext } from "../Cars/CarsProvider/CarsProvider";

import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [brand, setBrand] = useState([]);
  const [brandModal, setBrandModal] = useState(false);
  const [active, setActive] = useState(false);
  const [navActive, setNavActive] = useState(false);
  const imgUrl = "https://autoapi.dezinfeksiyatashkent.uz/api/uploads/images/";
  const [searchQuery, setSearchQuery] = useState("");
  const [Carss, SetCars] = useState([]);
  const navigate = useNavigate();

  const { setFilteredCars } = useContext(FilteredCarsContext);
  const BASE_URL = "https://autoapi.dezinfeksiyatashkent.uz/api";

  // Fetch brands

  const handleActive = () => {
    setNavActive(!navActive);
  };
  // get qismi
  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://autoapi.dezinfeksiyatashkent.uz/api/brands"
      );

      if (response.ok) {
        const responseData = await response.json();
        setBrand(responseData.data);
      } else {
        console.log("Malumot olishda xatolik");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const scrollTo = () => {
    window.scrollTo({
      top: 0,
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://autoapi.dezinfeksiyatashkent.uz/api/brands"
        );

        if (response.ok) {
          const responseData = await response.json();
          setBrand(responseData.data);
        } else {
          console.log("Error fetching brands");
        }
      } catch (error) {
        console.log("Error fetching brands:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/cars`);
        SetCars(response.data || []);
      } catch (error) {
        console.error("Error fetching cars:", error);
      }
    };

    fetchData();
  }, []);

  const search = (e) => {
    e.preventDefault();
    const filtered = Carss.data.filter(
      (car) =>
        car.brand.title.toLowerCase().trim() ===
        searchQuery.toLowerCase().trim()
    );
    setFilteredCars(filtered);
    navigate("/cars");
    setSearchQuery("");
  };

  return (
    <div className="nav-container">
      <div className="container" onMouseLeave={() => setBrandModal(false)}>
        <div className="nav-lang-search">
          <div className="nav-lang">
            <span
              className="lang-item"
              alt="en"
              onClick={() => {
                localStorage.setItem("language", "en");
                i18n.changeLanguage("en");
              }}
            >
              <img
                alt="en"
                width={30}
                height={30}
                className="lang-img"
                src="http://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg"
              />
            </span>
            <span
              className="lang-item"
              alt="ru"
              onClick={() => {
                localStorage.setItem("language", "ru");
                i18n.changeLanguage("ru");
              }}
            >
              <img
                alt="ru"
                width={30}
                height={30}
                className="lang-img"
                src="http://purecatamphetamine.github.io/country-flag-icons/3x2/RU.svg"
              />
            </span>
          </div>
          <FaSearch
            onClick={() => setActive(true)}
            className="search-icon hideSearch"
          />
          <div className={`nav-search ${active ? "active" : ""}`}>
            <FaSearch className="search-icon" />

            <form onSubmit={search}>
              <input
                type="text"
                className="search-input"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </form>

            <IoIosCloseCircleOutline
              onClick={() => setActive(false)}
              className="close-icon"
            />
          </div>
        </div>
        <div className="nav-logo">
          <Link to="/" onClick={scrollTo}>
            <img src={Logo} className="logo-img" alt="" />
          </Link>
        </div>
        <div className={`nav-items ${navActive ? "active" : ""}`}>
          <IoClose className="nav-close" onClick={() => setNavActive(false)} />
          <Link
            to="/cars"
            onClick={() => {
              scrollTo(), setNavActive(false);
            }}
            className="nav-item"
            onMouseEnter={() => setBrandModal(false)}
          >
            {t("nav-item1")}
          </Link>
          <span className="nav-item" onMouseEnter={() => setBrandModal(true)}>
            {t("nav-item2")}
          </span>
          {brandModal && (
            <div
              className="brand-modal"
              onMouseLeave={() => setBrandModal(false)}
              onClick={() => setBrandModal(false)}
            >
              {brand.map((item, index) => (
                <Link
                  to={`/cars/${item.id}`}
                  onClick={() => {
                    setBrandModal(false);
                    setNavActive(false);
                    window.scrollTo({ top: 0 });
                  }}
                  className="brand-modal-item"
                  key={index}
                >
                  <div className="brand-logo">
                    <img
                      src={imgUrl + item.image_src}
                      alt=""
                      className="brand-img"
                    />
                  </div>
                  <span className="brand-name">
                    <span className="name-item">Rent</span>
                    <b>{item.title}</b> <span className="name-item">Dubai</span>
                  </span>
                </Link>
              ))}
            </div>
          )}
          <Link
            to="/services"
            className="nav-item"
            onMouseEnter={() => setBrandModal(false)}
            onClick={() => {
              scrollTo(), setNavActive(false);
            }}
          >
            {t("nav-item3")}
          </Link>
          <Link
            to="/about-us"
            className="nav-item"
            onMouseEnter={() => setBrandModal(false)}
            onClick={() => {
              scrollTo(), setNavActive(false);
            }}
          >
            {t("nav-item4")}
          </Link>
          <Link
            to="/contact"
            className="nav-item"
            onMouseEnter={() => setBrandModal(false)}
            onClick={() => {
              scrollTo(), setNavActive(false);
            }}
          >
            {t("nav-item5")}
          </Link>
          <Link
            to="/blog"
            className="nav-item"
            onMouseEnter={() => setBrandModal(false)}
            onClick={() => {
              scrollTo(), setNavActive(false);
            }}
          >
            {t("nav-item6")}
          </Link>
          <a href="tel:+998903646903" target="_blank" className="nav-item">
            +971(55)846 21 24
          </a>
        </div>
        <FaBars className="bars-icon" onClick={handleActive} />
      </div>
    </div>
  );
};

export default Navbar;
