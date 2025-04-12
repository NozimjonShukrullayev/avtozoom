import { Box, Typography } from "@mui/material";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { GLOBALURL } from "../..";
import style from "../params.module.css";
import AboutCars from "./about-cars";
import SimilarOffers from "./similar-offers";

const Slickdots = (props) => {
  const [tab, setTab] = useState(0);
  const [swiper, setSwiper] = useState(null);

  useEffect(() => {
    if (swiper) {
      swiper.on("slideChange", () => {
        setTab(swiper.realIndex);
      });
    }
  }, [swiper]);

  const handleTabClick = (index) => {
    setTab(index);
    if (swiper) {
      swiper.slideTo(index);
    }
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Typography fontFamily={"Roboto"} variant="h2" color={"white"} my={5}>
        {props?.data[0]?.brand?.title} {props?.data[0]?.model?.name} (
        {props?.data[0]?.color})
      </Typography>
      <Box sx={{ display: "flex", gap: "99px", alignItems: "start" }}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Box
            sx={{
              width: "570px",
              display: "flex",
              alignItems: "start",
              gap: "40px",
            }}
            className="w-[570px] flex gap-5 items-start"
          >
            <Box
              sx={{
                width: "150px",
                display: "flex",
                flexDirection: "column",
                gap: "15px",
              }}
            >
              {props?.data[0]?.car_images?.map((img, i) => (
                <Box
                  sx={{ width: "158px", height: "80px",cursor:"pointer" }}
                  key={i}
                  onClick={() => handleTabClick(i)}
                >
                  <img
                    style={{ width: "100%", height: "100%" }}
                    loading="lazy"
                    src={`${GLOBALURL}uploads/images/${img.image.src}`}
                    alt="car_img"
                  />
                </Box>
              ))}
            </Box>

            <Box sx={{ height: "500px", width: "525px" }}>
              <Swiper
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                  clickable: true,
                }}
                navigation={false}
                modules={[Navigation]}
                initialSlide={tab}
                onSwiper={setSwiper}
              >
                {props?.data[0]?.car_images?.map((image, i) => (
                  <SwiperSlide
                    className={`mySwiper ${style.swiperslide}`}
                    key={i}
                    style={{
                      backgroundColor: "transparent",
                      display: "flex",
                      height: "500px",
                    }}
                  >
                    <img
                      style={{
                        objectPosition: "center",
                        objectFit: "fill",
                        width: "100%",
                      }}
                      loading="lazy"
                      src={`${GLOBALURL}uploads/images/${image.image.src}`}
                      alt=""
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </Box>
          </Box>
          <Typography
            fontFamily={"Roboto"}
            style={{ fontSize: "28px" }}
            fontWeight={"700"}
            variant="h4"
            color={"white"}
            my={5}
          >
            Good to know about {props?.data[0]?.brand?.title}{" "}
            {props?.data[0]?.model?.name} ({props?.data[0]?.color})
          </Typography>
          <Box>
            <Typography variant="caption" color={"#fff9"}>
              Kilometrage limit per day
            </Typography>
            <Typography variant="h5" color={"white"}>
              {" "}
              {props?.data[0].max_speed} KM (Every extra km will be charged 20
              AED/km)
            </Typography>
          </Box>
          <Box mt={4}>
            <Typography variant="caption" color={"#fff9"}>
              Car rental deposit amount
            </Typography>
            <Typography variant="h5" color={"white"}>
              {" "}
              The deposit is refunded within {props?.data[0].deposit} days{" "}
            </Typography>
          </Box>
        </Box>  
        <AboutCars />

      </Box>
      <SimilarOffers />
    </Box>
  );
};
Slickdots.propTypes = {
  data: PropTypes.array,
};

export default Slickdots;
