import { useEffect, useState } from "react";
import { CiCircleChevRight } from "react-icons/ci";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Info.css"
const Info = () => {
  const [carsData, setCarsData] = useState([]);
  const imgUrl = "https://autoapi.dezinfeksiyatashkent.uz/api/uploads/images/";
  useEffect(() => {
    fetchDataCars();
  }, []);
  // cars uchun
  const fetchDataCars = async () => {
    try {
      const response = await fetch(
        "https://autoapi.dezinfeksiyatashkent.uz/api/cars"
      );

      if (response.ok) {
        const cars = await response.json();
        setCarsData(cars?.data);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleTop = () => {
    window.scrollTo({
      top:0
    })
  }

  return (
    <div className="info-container">
      <div className="info-cards">
        {carsData.map((car, carIndex) => (
          <div className="info-card" key={carIndex}>
            <div className="info-titles-btn">
              <span className="info-title">
                {car.category.name_en} Rental Dubai
              </span>
              <button className="title-btn">
                See All{" "}
                <Link style={{ color: "#fff" }} to={`/cars/${car.category_id}`} onClick={handleTop}>
                  <CiCircleChevRight className="title-icon" />
                </Link>
              </button>
            </div>
            <div className="card-slider">
              <Swiper loop={true}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                  spaceBetween: 0,
                  pagination: false,
                },
                400: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                  pagination: false,
                },
                576: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                  pagination: false,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween:15,
                  pagination: {
                    clickable:true
                  }
                },
                992: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                  pagination: {
                    clickable:true
                  }
                },
                1200: {
                  slidesPerView: 3,
                  spaceBetween:30,
                  pagination: {
                    clickable:true
                  },
                },
              }}
              slidesPerView={3} className="card-swiper">
                {car.car_images.map((image, imageIndex) => (
                  <SwiperSlide key={imageIndex}>
                    <Link
                      to={`/carsinfo/${image.car_id}`}
                      className="cars-slide"
                      onClick={handleTop}
                    >
                      <img
                        src={imgUrl + image.image.src}
                        className="cars_image"
                        alt=""
                      />
                      <div className="cars-about">
                        <span className="cars-name">
                          {car.brand.title} {car.model.name}
                        </span>
                        <hr />
                        <span className="cars-model-price">
                          AED {car.price_in_aed} / ${car.price_in_usd}
                        </span>
                        <span className="cars-date">per day</span>
                      </div>
                    </Link>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Info;
