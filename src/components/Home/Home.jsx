import "./Home.css"
import Brands from "./HomeModule/Brands/Brands"
import Categories from "./HomeModule/Categories/Categories"
import Info from "./HomeModule/Info/Info"
import Main from "./HomeModule/Main/Main"
import Slider from "./HomeModule/Slider/Slider"
import Faq from './HomeModule/Faq/Faq';
import HomeService from "./HomeModule/HomeService/HomeService"
const Home = () => {
  return (
    <>
    <Main />
    <Slider />
    <Brands />
    <Info />
    <HomeService />
    <Categories />
    <Faq />
    </>
  )
}

export default Home