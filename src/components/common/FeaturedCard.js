import React from "react";
import { Link } from "react-router-dom";
import TagsList from "./TagsList";
import AuthorInfo from "./AuthorInfo";

const FeaturedCard = (props) => {
  const { blog } = props;
  // console.log(blog.cover)
  const removeTag = (content) => {
    const regex = /<\/?[^>]+>/gi;
    const regex2 = /&[a-z]+;/gi;
    return content.replace(regex, "").replace(regex2, " ");
  };

  const text = removeTag(blog.content)

  return (
    <div className="featuredCard">
      <img src={blog.cover} alt="Blog Cover" className="cardImage" />
      <div className="cardContent">
        <TagsList tags={blog.tags} />
        <h2>{blog.title}</h2>
        <AuthorInfo
          authorName={blog.author.username}
          dateTime={blog.created_at}
          content={text}
        />
        <p>
          {removeTag(blog.content).substring(0, 70)}
          {blog.content.length > 70 && "...."}
        </p>
        <Link className="readMore" to={`/${blog.slug}`}>
          <button>Read More</button>
        </Link>
      </div>
    </div>
  );
};

export default FeaturedCard;
