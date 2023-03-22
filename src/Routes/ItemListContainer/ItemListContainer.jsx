import React, { useState, useEffect } from "react";
import "./ItemListContainer.css";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import Spinner from "../../Components/Spinner/Spinner";
import UnavailableWarning from "../../Components/UnavailableWarning/UnavailableWarning";

const ItemListContainer = () => {
  let [products, setProducts] = useState([]);
  let [load, setLoad] = useState(true);
  const { categoryId } = useParams();
  let [title, setTitle] = useState();

  useEffect(() => {
    const db = getFirestore();
    const productsCollection = collection(db, "products");
    if (categoryId !== undefined) {
      setTitle(categoryId.replace(/-/g, " "));
      const q = query(
        productsCollection,
        where("category", "==", categoryId.replace(/-/g, " "))
      );
      getDocs(q)
        .then((snapshotList) => {
          const docs = snapshotList.docs.map((snapshot) => ({
            id: snapshot.id,
            ...snapshot.data(),
          }));
          setProducts(docs);
        })
        .catch((error) => console.log(error))
        .finally(setLoad(false));
    } else {
      setTitle("All products");
      getDocs(productsCollection)
        .then((snapshotList) => {
          const docs = snapshotList.docs.map((snapshot) => ({
            id: snapshot.id,
            ...snapshot.data(),
          }));
          setProducts(docs);
        })
        .catch((error) => console.log(error))
        .finally(() => setLoad(false));
    }
  }, [categoryId]);

  return (
    <>
      {products.length !== 0 && <h3>{title}</h3>}
      <div className="container">
        {load ? (
          <Spinner />
        ) : products[0] !== undefined ? (
          <ItemList items={products} />
        ) : (
          <UnavailableWarning />
        )}
      </div>
    </>
  );
};

export default ItemListContainer;
