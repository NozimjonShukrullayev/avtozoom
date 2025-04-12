import "./Slider.css";
import { Swiper, SwiperSlide } from "swiper/react";
import Slider1 from "../../../../assets/slider1.png";
import Slider2 from "../../../../assets/slider2.png";
import Slider3 from "../../../../assets/slider3.png";
import Slider4 from "../../../../assets/slider4.png";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link } from "react-router-dom";
const Slider = () => {

  const handleTop = () => {
    window.scrollTo({
      top:0
    })
  }

  return (
    <div className="slider-container">
      <Swiper
        navigation={true}
        slidesPerView={1}
        loop={true}
        modules={[Navigation, Pagination]}
        className="cars-swiper"
      >
        <SwiperSlide className="cars-img-container">
          <Link to="/cars" onClick={handleTop}  className="img-container">
            <img className="cars-image" src={Slider1} alt="" />
          </Link>
        </SwiperSlide>
        <SwiperSlide className="cars-img-container">
          <Link to="/cars" onClick={handleTop}  className="img-container">
            <img className="cars-image" src={Slider2} alt="" />
          </Link>
        </SwiperSlide>
        <SwiperSlide className="cars-img-container">
          <Link to="/cars" onClick={handleTop}  className="img-container">
            <img className="cars-image" src={Slider3} alt="" />
          </Link>
        </SwiperSlide>
        <SwiperSlide className="cars-img-container">
          <Link to="/cars" onClick={handleTop}  className="img-container">
            <img className="cars-image" src={Slider4} alt="" />
          </Link>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
