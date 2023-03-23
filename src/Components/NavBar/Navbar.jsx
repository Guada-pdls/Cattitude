import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import CartWidget from "./CartWidget/CartWidget";
import { VscAdd } from "react-icons/vsc";
import Searcher from "./Searcher/Searcher";

const Navbar = () => {

  let [isOpen, setIsOpen] = useState(false);
  let [openDropdown, setOpenDropdown] = useState(false);

  return (
    <div className="navbar">
      <ul className={`nav_items ${isOpen && "open"}`}>
        <li className="dropdown">
          <div>
            <Link
              to="/"
              className="hover-underline-animation"
              onClick={() => setIsOpen(false)}
            >
              SHOP
            </Link>
            <button
              className={openDropdown ? "close-dropdown" : "open-dropdown"}
              onClick={() => setOpenDropdown(!openDropdown)}
            >
              <VscAdd />
            </button>
          </div>

          <div
            className={openDropdown ? "dropdown-content" : "dropdown-closed"}
          >
            <ul>
              <li>
                <Link
                  to="/cat-feeding"
                  href="#"
                  className="hover-underline-animation"
                  onClick={() => setIsOpen(false)}
                >
                  CAT FEEDING
                </Link>
              </li>
              <li>
                <Link
                  to="/cat-accesories"
                  href="#"
                  className="hover-underline-animation"
                  onClick={() => setIsOpen(false)}
                >
                  CAT ACCESORIES
                </Link>
              </li>
              <li>
                <Link
                  to="/cat-hygiene-products"
                  href="#"
                  className="hover-underline-animation"
                  onClick={() => setIsOpen(false)}
                >
                  CAT HYGIENE PRODUCTS
                </Link>
              </li>
              <li>
                <Link
                  to="/cat-toys"
                  href="#"
                  className="hover-underline-animation"
                  onClick={() => setIsOpen(false)}
                >
                  CAT TOYS
                </Link>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <Link
            to="/about"
            href="#"
            className="hover-underline-animation"
            onClick={() => setIsOpen(false)}
          >
            {" "}
            ABOUT
          </Link>
        </li>
        <li>
          <Link
            to="/faqs"
            href="#"
            className="hover-underline-animation"
            onClick={() => setIsOpen(false)}
          >
            {" "}
            FAQ
          </Link>
        </li>
      </ul>
      <div
        className={`nav_toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <Link to="/" className="nav_logo">
        {" "}
        Cattitude{" "}
      </Link>
      <div className="nav_icons">
        <Searcher/>
        <Link to="/cart">
          <CartWidget />
        </Link>
      </div>
    </div>
  );
};
export default Navbar;
