import React from "react";
import { Link } from "react-router-dom";
import TagsList from "./TagsList";

const PopularPostCard = (props) => {
  const {blog} = props
  return (
    <div className="popularPostCard">
      <div
            className="popularImage"
            style={{
              backgroundImage: `url("${blog.cover}")`,
              backgroundSize: "contain",
            }}
          ></div>
      <div className="popularContent">
        <TagsList tags={blog.tags} />
        <Link to={`/${blog.slug}`}>
          <p className="popularTitle">{blog.title}</p>
        </Link>
        <div className="author-info">
          <p>Etchie Daniel | 5 mins read</p>
        </div>
      </div>
    </div>
  );
};

export default PopularPostCard;
