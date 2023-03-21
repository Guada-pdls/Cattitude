import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import CartWidget from "./CartWidget/CartWidget";
import { GrSearch } from "react-icons/gr";
import { VscAdd, VscClose } from "react-icons/vsc";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import Spinner from "../Spinner/Spinner";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const Navbar = () => {
  let [isOpen, setIsOpen] = useState(false);

  let [openDropdown, setOpenDropdown] = useState(false);

  let [search, setSearch] = useState();
  let [searchOpen, setSearchOpen] = useState(false);
  let [products, setProducts] = useState([]);
  let [load, setLoad] = useState(true);

  const MySwal = withReactContent(Swal);

  const searcherHandler = () => {
    setLoad(true);

    const db = getFirestore();
    const productsCollection = collection(db, "products");

    getDocs(productsCollection)
      .then((snapshotList) => {
        const docs = snapshotList.docs.map((snapshot) => ({
          id: snapshot.id,
          ...snapshot.data(),
        }));
        search !== undefined && search !== ""
          ? setProducts(
              docs.filter(
                (product) =>
                  product.title.toLowerCase().includes(search.toLowerCase()) ||
                  product.description
                    .toLowerCase()
                    .includes(search.toLowerCase())
              )
            )
          : setProducts([]);
      })
      .catch((error) => MySwal.fire({
        title: "Invalid data",
        text: `Error: ${error}`,
        icon: "error",
      }))
      .finally(() => setLoad(false));
  };

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
        <div className="searcher">
          <input type="search" placeholder="SEARCH" onChange={(e) => setSearch(e.target.value)}/>
          <button onClick={() => { searcherHandler(); setSearchOpen(true);}}><GrSearch /></button>
          <div className={ searchOpen ? "results-container" : "results-container close"}>
            <button onClick={() => setSearchOpen(false)}>
              <VscClose />
            </button>
            {load ? (
              <Spinner/>
            ) : products.length === 0 ? (
              <p>
                Unfortunately, your search did not return any results. Please
                try a different search term or browse our categories to find
                what you're looking for.
              </p>
            ) : (
              products.map((prod) => (
                <Link to={`/products/${prod.id}`} key={prod.id}>
                  <article onClick={() => setSearchOpen(false)}>
                    <GrSearch />
                    {prod.title}
                  </article>
                </Link>
              ))
            )}
          </div>
        </div>
        <Link to="/cart">
          <CartWidget />
        </Link>
      </div>
    </div>
  );
};
export default Navbar;
