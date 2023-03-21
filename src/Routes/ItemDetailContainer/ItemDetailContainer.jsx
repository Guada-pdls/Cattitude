import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import "./ItemDetailContainer.css";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import Spinner from "../../Components/Spinner/Spinner";
import UnavailableWarning from "../../Components/Unavailable Warning/UnavailableWarning";

const ItemDetailContainer = () => {
  let [product, setProduct] = useState({});

  let [load, setLoad] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const productRef = doc(db, "products", id);
    getDoc(productRef)
      .then((snapshot) => {
        const obj = {
          id: snapshot.id,
          ...snapshot.data(),
        };
        setProduct(obj);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoad(false));
  }, [id]);

  return (
    <>
      {load ? (
        <div className="container">
          <Spinner />
        </div>
      ) : product.img !== undefined ? (
        <ItemDetail item={product} />
      ) : (
        <UnavailableWarning factor="product"/>
      )}
    </>
  );
};

export default ItemDetailContainer;
