import React from "react";
import "./Footer.css";
import { FiMail, FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";

const Footer = () => {
  return (
    <footer>
      <div>© Cattitude, 2023</div>
      <div className="contact">
        <h4>Contact Us</h4>
        <ul className="footer-icons">
          <li>
            <FiMail />
          </li>
          <li>
            <FiFacebook />
          </li>
          <li>
            <FiInstagram />
          </li>
          <li>
            <FiTwitter />
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
