import axios from "axios";
import React, { useEffect, useState } from "react";
import PopularPostCard from "./PopularPostCard"
import { TOP_BLOGS } from "../utils/urls";

const PopularBlogList = (props) => {
    const [fetching, setFetching] = useState(true)
    const [topBlogs, setTopBlogs] = useState([])

    useEffect(() => {
        getTopBlog()
    }, [])

    const getTopBlog = () => {
        setFetching(true);
        axios
          .get(TOP_BLOGS)
          .then((res) => {
            setTopBlogs(res.data);
            setFetching(false);
          })
          .catch((err) => console.log(err));
      };
  return (
    <div className="popularPost">
      <h3>
        <span className="primaryBg">Popular</span> Posted{" "}
      </h3>
    {!fetching && topBlogs.map((blog) => <PopularPostCard key={blog.id} blog={blog} />)}
    </div>
  );
};

export default PopularBlogList