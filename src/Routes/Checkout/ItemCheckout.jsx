import React from "react";

const ItemCheckout = ({product}) => {
  return (
    <li className="checkout-item">
      <h5 className="checkout-item_title">{product.title}</h5>
      <div className="checkout-item_info">
        <p className="checkout-item_price">$ {product.price}</p>
        <p className="checkout-item_quantity">x {product.quantity}</p>
      </div>
    </li>
  );
};

export default ItemCheckout;
