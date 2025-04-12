import { CiCircleChevRight } from "react-icons/ci";
import { Link } from "react-router-dom";
import "./BlogCard.css";

function BlogCard({ img, title, description, date, id }) {
  return (
    <div className="blog__card">
      <div className="blog__card__img">
        <img src={img} alt="blog-img" />
      </div>
      <div className="blog__card__content">
        <h3 className="blog__card__title">{title}</h3>
        <p className="blog__card__description">{description}...</p>
        <div className="card__content__footer">
          <span>{date}</span>
          <Link to={`/blog_info/${id}`}>
            <CiCircleChevRight className="card__arrow__icon" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default BlogCard;