import axios from "axios";
import moment from "moment";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AuthorCard from "../../common/AuthorCard";
import PopularBlogList from "../../common/PopuplarBlogList";
import { store } from "../../stateManagement/store";
import { BLOG_URL } from "../../utils/urls";
import Comments from "./Comments";

const SingleBlog = (props) => {
  const [fetching, setFetching] = useState(true);
  const [activeBlog, setActiveBlog] = useState(null);
  const {dispatch} = useContext(store)
  const params = useParams();

  useEffect(() => {
    dispatch({type: "textAction", payload: "Welcome"})
    axios.get(BLOG_URL + params.slug).then((res) => {
      setActiveBlog(res.data);
      setFetching(false);
    });
  }, [params.slug]);

  return (
    <section className="singleBlog">
      <main>
      {!fetching ? (<>
          <p className="cardTag">Travel</p>
          <h1 className="singleBlogTitle">{activeBlog.title}</h1>
          <div className="author-info">
            <p>
              <i className="fa-regular fa-user"></i>
              {activeBlog.author.username} |
              <i className="fa-solid fa-calendar-days"></i>
              {moment(new Date(activeBlog.created_at)).format("DD MMM YYYY")} |
              <i className="fa-regular fa-clock"></i>5 mins read
            </p>
          </div>
          <div
            className="bigBlogImage"
            style={{
              backgroundImage: `url("${activeBlog.cover}")`,
              backgroundSize: "contain",
            }}
          ></div>

          <p dangerouslySetInnerHTML={{ __html: activeBlog.content }}></p>
          </>
      ) : (
        "Fetching"
      )}
      {!fetching && <Comments id={activeBlog.id} />}
      </main>
      <aside>
        <h2>
          <span className="primaryBg">Top</span> Authors
        </h2>
        <div>
          <AuthorCard />
          <AuthorCard />
          <AuthorCard />
          <AuthorCard />
        </div>

       <PopularBlogList />
      </aside>
    </section>
  );
};

export default SingleBlog;
