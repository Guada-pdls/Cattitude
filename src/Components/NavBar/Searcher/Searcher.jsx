import React, {useState} from 'react'
import "./Searcher.css"
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import Spinner from '../../Spinner/Spinner';
import { GrSearch } from "react-icons/gr";
import { VscClose } from "react-icons/vsc";
import { Link } from 'react-router-dom';

const Searcher = () => {

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
    <div className="searcher">
          <input type="search" placeholder="SEARCH" onChange={(e) => setSearch(e.target.value)}/>
          <button onClick={() => { searcherHandler(); setSearchOpen(true);}}><GrSearch /></button>
          <div className={`results-container ${searchOpen && "close"}`}>
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
  )
}

export default Searcher