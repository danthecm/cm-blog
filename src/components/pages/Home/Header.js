import axios from "axios";
import React, { useEffect, useState } from "react";
import { FEATURED_BLOG_URL } from "../../utils/urls";
import FeaturedCard from "../../common/FeaturedCard";
import PopularBlogList from "../../common/PopuplarBlogList";

const Header = () => {
  const [fetching, setFetching] = useState(true);
  const [blogList, setBlogList] = useState([]);

  useEffect(() => {
    getBlogContent();
  }, []);

  const getBlogContent = () => {
    axios
      .get(FEATURED_BLOG_URL)
      .then((res) => {
        setBlogList(res.data);
        setFetching(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <section className="introHeader">
      <div className="featured">
        <h3>
          <span className="primaryBg">Featured</span> This Month
        </h3>
        {!fetching ? (
          <div className="featuredList">
            {blogList.map((blog) => (
              <FeaturedCard key={blog.id} blog={blog} />
            ))}
          </div>
        ) : (
          <p>NO Data Found</p>
        )}
      </div>
      <PopularBlogList />
    </section>
  );
};

export default Header;
