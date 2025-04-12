import BlogCard from "./BlogCard/BlogCard";
import { blogDataEn, blogDataRu } from "./blog-data";
import "./Blog.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const Blog = () => {
  const { t } = useTranslation();
  const selectedLang = localStorage.getItem("language");
  const [dataLang, setDataLang] = useState([]);
  useEffect(() => {
    if (selectedLang === "en") {
      setDataLang(blogDataEn);
    } else {
      setDataLang(blogDataRu);
    }
  }, [selectedLang])

  return (
    <div id="blog">
      <div className="container">
        <div className="blog__breadcrumb">
          {selectedLang === "en" ? (
            <>
              <Link to={'/'}>Luxury Cars for Rent in Dubai</Link>
              {'/'}
              <Link to={'/'}>Blog</Link>
            </>
          ) : (
            <>
              <Link to={'/'}>Аренда люксовых и спортивных авто</Link>
              {'/'}
              <Link to={'/'}>Блог</Link>
            </>
          )}
        </div>
        <h2 className="blog__title">{t("blog-title")}</h2>
        <div className="blog__card__list">
          {dataLang?.map((item, index) => (
            <BlogCard key={index} id={item.id} img={item.img} title={item.title} description={item.descriptionOne.slice(0, 400)} date={item.date} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Blog;