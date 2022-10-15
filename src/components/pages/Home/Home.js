import React from "react";
import Header from "./Header";
import RecentPostCard from "../../common/RecentPostCard";
import "./Home.css";
import "../../common/Navbar.css";
import AuthorCard from "../../common/AuthorCard";

const Home = (props) => {
  console.log("welcome to home page");

  return (
    <>
      <Header />
      <main className="mainContent">
        <div>
          <h3>
            <span className="primaryBg">Recently</span> Posted{" "}
          </h3>
          <section>
            <RecentPostCard />
          </section>
        </div>
        <aside>
          <h3>
            <span className="primaryBg">Top</span> Authors{" "}
          </h3>
          <div className="authorsList">
            <AuthorCard />
            <AuthorCard />
            <AuthorCard />
            <AuthorCard />
          </div>
          <h3>
            <span className="primaryBg">Categories</span>
          </h3>
          <div className="categories">
            <div className="category">
              <p>
                Lifestyle <span>09</span>
              </p>
              <hr />
            </div>
            <div className="category">
              <p>
                Travle <span>10</span>
              </p>
              <hr />
            </div>
            <div className="category">
              <p>
                Food <span>05</span>
              </p>
              <hr />
            </div>
            <div className="category">
              <p>
                Healthcare <span>15</span>
              </p>
              <hr />
            </div>
          </div>

          <h3>
            <span className="primaryBg">Today's</span> Update
          </h3>
          <div className="stats">
          <div className="stats_container ">
            <p>13</p>
            <p>New Post</p>
          </div>

          <div className="stats_container ">
            <p>480</p>
            <p>Total Visitors</p>
          </div>

          <div className="stats_container ">
            <p>29</p>
            <p>New Subscribers</p>
          </div>

          <div className="stats_container ">
            <p>130</p>
            <p>Blog Reads</p>
          </div>
          </div>

          <h3>
            <span className="primaryBg">Search</span> With Tags
          </h3>
          <div className="searchTags">
            <p>Travel</p>
            <p>Health</p>
            <p>Design</p>
            <p>Education</p>
            <p>Technology</p>
            <p>Food</p>
            <p>Art</p>
          </div>
        </aside>
      </main>
    </>
  );
};

export default Home;
