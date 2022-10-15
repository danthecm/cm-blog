import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BLOG_URL } from "../utils/urls";
import AuthorInfo from "./AuthorInfo";

const RecentPostCard = () => {
  const [fetching, setFetching] = useState(true);
  const [blogPost, setPost] = useState([]);

  useEffect(() => {
    getTopBlog();
  }, []);

  const getTopBlog = () => {
    setFetching(true);
    axios
      .get(BLOG_URL)
      .then((res) => {
        setPost(res.data);
        setFetching(false);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
     {!fetching && blogPost.results.map((blog) => {
         return (<div className="recentPostCard" key={blog.id}>
          <Link className="readMore" to={`/${blog.slug}`}>
         <img src={blog.cover} alt="Blog Cover" className="recentImage" />
         <h2>{blog.title}</h2>
         <AuthorInfo
           authorName={blog.author.username}
           dateTime={blog.created_at}
           content={blog.content}
         />
         <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam, voluptas?</p>
         </Link>
       </div>)
     })}
    </>
  );
};

export default RecentPostCard;
