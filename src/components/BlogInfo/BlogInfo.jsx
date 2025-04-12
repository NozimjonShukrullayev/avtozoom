import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { blogDataEn, blogDataRu } from "../Blog/blog-data";
import "./BlogInfo.css";

const BlogInfo = () => {
  const { id } = useParams();
  const selectedLang = localStorage.getItem("language");
  const [dataLang, setDataLang] = useState([]);
  useEffect(() => {
    if (selectedLang === "en") {
      setDataLang(blogDataEn[id-1]);
    } else {
      setDataLang(blogDataRu[id-1]);
    }
  }, [selectedLang])

  return (
    <div id="blog-info">
      <div className="container">
        <div className="blog__breadcrumb">
          {selectedLang === "en" ? (
            <>
              <Link to={'/'}>Luxury Cars for Rent in Dubai</Link>
              {'/'}
              <Link to={'/blog'}>Blog</Link>
              {'/'}
              <Link to={'/'}>Top 5 Reasons to Rent a Car Dubai</Link>
            </>
          ) : (
            <>
              <Link to={'/'}>Аренда люксовых и спортивных авто</Link>
              {'/'}
              <Link to={'/blog'}>Блог</Link>
              {'/'}
              <Link to={'/'}>5 главных причин арендовать автомобиль в Дубае</Link>
            </>
          )}
        </div>
        <h2 className="blogInfo__title">{dataLang?.title}</h2>
        <p className="blogInfo__description">{dataLang?.descriptionOne}</p>
        <p className="blogInfo__subtitle">{dataLang?.location}</p>
        <img className="blogInfo__img" src={dataLang?.img} alt="img" />
        <p className="blogInfo__description">{dataLang?.descriptionTwo}</p>
      </div>
    </div>
  )
}

export default BlogInfo;