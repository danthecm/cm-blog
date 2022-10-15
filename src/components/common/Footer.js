import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <section className="mainFooter">
        <div>
          <h3>
            <span className="primaryBg logo">CM</span>Blog{" "}
          </h3>
          <p>
            Did you come here for something in particular or just general Riker
          </p>
        </div>

        <div>
          <h3>Blog</h3>
          <p>Travel</p>
          <p>Health</p>
          <p>Design</p>
          <p>Education</p>
          <p>Technology</p>
        </div>

        <div>
          <h3>Quick Links</h3>
          <p>FAQ</p>
          <p>Terms and Conditions</p>
          <p>Support</p>
          <p>Privacy and Policy</p>
        </div>

        <section>
          <div>
            <h3>Subscriber for Newsletter</h3>
            <input type="text" placeholder="Your Email" />
            <button>Subscribe</button>
          </div>
          <div>
            <h3 className="followUs">Follow on:</h3>
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
              <button>
                <i className="fa-brands fa-pinterest"></i>
              </button>
            </div>
          </div>
        </section>
      </section>
      <hr />
      <p>Designed By CM & Developed By DanTheCM</p>
    </footer>
  );
};

export default Footer;
