import React from "react";

const AuthorCard = (props) => {
  return (
    <div className="authorCard">
      <div
        className="authorImage"
        style={{
          backgroundImage: `url("https://clipground.com/images/img_avatar-png-2.png")`,
          backgroundSize: "contain",
        }}
      ></div>
      <div className="">
        <h3 className="authorTitle">John Doe</h3>
        <p className="authorAbout">Fashion Designer, Full Stack Developer</p>
        <div className="authorSocial">
          <button>
            <i className="fa-brands fa-facebook-square"></i>
          </button>
          <button>
            <i className="fa-brands fa-twitter"></i>
          </button>
          <button>
            <i className="fa-brands fa-instagram"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthorCard;
