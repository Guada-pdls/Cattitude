import React from "react";
import { Link } from "react-router-dom";
import Item from "./Item";

const ItemList = ({ items }) => {
  return (
    <>
      {items.map((item) => 
        <Link to={`/products/${item.id}`} key={item.id}>
          <Item item={item} />
        </Link>
      )}
    </>
  );
};

export default ItemList;
