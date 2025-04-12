import { CiCircleChevDown, CiCircleChevRight } from "react-icons/ci";
import "./Faq.css";
import { useEffect, useState } from "react";
import InstaImg1 from "../../../../assets/insta-img-1.webp"
import InstaImg2 from "../../../../assets/insta-img-2.webp"
import InstaImg3 from "../../../../assets/insta-img-3.webp"
import InstaImg4 from "../../../../assets/insta-img-4.webp"
import InstaImg5 from "../../../../assets/insta-img-5.webp"
import InstaImg6 from "../../../../assets/insta-img-6.webp"
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [modalImg,setModalImg] = useState(null)
  const [location,setLocation] = useState([])
  const [city,setCity] = useState([])
  const {t} = useTranslation()

  const handleClickActive = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const openModal = (image) => {
    setModalImg(image)
  }
  const closeModal = () => {
    setModalImg(null)
  }

  const Faqs = [
    {
      id: 1,
      question: t("home-faq-ques1"),
      answer:
        t("home-faq-ans1"),
    },
    {
      id: 2,
      question: t("home-faq-ques2"),
      answer:
        t("home-faq-ans2"),
    },
    {
      id: 3,
      question: t("home-faq-ques3"),
      answer:
        t("home-faq-ans3"),
    },
    {
      id: 4,
      question:
        t("home-faq-ques4"),
      answer:
        t("home-faq-ans4"),
    },
    {
      id: 5,
      question: t("home-faq-ques5"),
      answer:
        t("home-faq-ans5"),
    },
  ];
  const instagram = [
    {
      id:1,
      img: InstaImg1,
    },
    {
      id:2,
      img: InstaImg2,
    },
    {
      id:3,
      img: InstaImg3,
    },
    {
      id:4,
      img: InstaImg4,
    },
    {
      id:5,
      img: InstaImg5,
    },
    {
      id:6,
      img: InstaImg6,
    },
  ]
// location uchun
  const fetchLocation = async () => {
    try {
      const response = await fetch("https://autoapi.dezinfeksiyatashkent.uz/api/locations")
      if(response.ok){
        const locationData =await response.json()
        setLocation(locationData?.data)
      }
    } catch (error) {
      console.log(error);
    }
  }
  // city uchun
  const fetchCity = async () => {
    try {
      const response = await fetch("https://autoapi.dezinfeksiyatashkent.uz/api/cities")
      if(response.ok){
        const cityData =await response.json()
        setCity(cityData?.data)
      }
    } catch (error) {
      console.log(error);
    }
  }

  const handleTop = () => {
    window.scrollTo({
      top:0
    })
  }

  useEffect(() => {
    fetchLocation()
    fetchCity()
  },[])

  return (
    <div className="faq-container">
      <div className="faq-cards">
        <span className="faq">{t("footer-about-item2")}</span>
        <div className="cards-faq">
          {Faqs.map((faq, index) => (
            <>
            <div className="card-faq" key={index} onClick={() => handleClickActive(index)}>
              {activeIndex != index ? <CiCircleChevRight className="faq-icon" /> : <CiCircleChevDown className="faq-icon" />}
              <div className="faq-ans-ques">
                <span className="ques">
                  {faq.question}
                </span>
                <span className={`ans ${activeIndex=== index ? "active" : ""}`}>
                  {faq.answer}
                </span>
              <hr className="faq-hr" />
              </div>
            </div>
            </>
          ))}
        </div>
      </div>
      <div className="instagram-cards">
        <span className="insta">{t("home-faq-instagram-title")}</span>
        <div className="cards-insta">
          {instagram.map((image,index) => (
            <div className="card-insta" key={index} onClick={() => openModal(image)}>
              <img src={image.img} alt="" className="images" />
            </div>
          ))}
          {
            modalImg && (
              <div className="modal" onClick={closeModal}>
                <div className="img-modal" >
                <span className="close">&times;</span>
                <img src={modalImg.img} className="modal-content" alt="" />
              </div>
              </div>
            )
          }
        </div>
      </div>
      <div className="location-city-container">
        <div className="location-cards">
          <span className="location-title">{t("home-faq-location")}</span>
          <div className="location-card">
            {
              location.map((item,index) => (
                <Link to={`/cars/${item.id}`} className="location-item" onClick={handleTop} key={index}>{item.name}</Link>
              ))
            }
          </div>
        </div>
        <div className="city-cards">
          <span className="city-title">{t("home-faq-city")}</span>
          <div className="city-card">
            {
              city.map((city,index) => (
                <Link to={`/cars/${city.id}`} className="city-item" onClick={handleTop} key={index}>{city.name}</Link>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
