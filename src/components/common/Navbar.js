import React from "react";
import "./Navbar.css";

const NavBar = (props) => {
  return (
      <nav>
        <div>
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Catgory</a>
        </div>
        <div className="logo">
          <h3><span className="primaryBg logo">CM</span>Blog </h3>
        </div>
        <div>
          <button>
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
          <button>
            <i className="fa-solid fa-pen-to-square"></i>
          </button>
          <a href="/">Contact</a>
          <a href="/">en</a>
          <div className="darkTheme">
            <button>
              <i className="fa-regular fa-sun lumos"></i>
            </button>
            <button>
              <i className="fa-regular fa-moon fa-flip-horizontal"></i>
            </button>
          </div>
        </div>
      </nav>
  );
};

export default NavBar;
