import React, {useContext} from "react";
import "./CartWidget.css"
import { CartContext } from "../../../Context/CartContext";
import { GrCart } from "react-icons/gr";

const CartWidget = () => {
  const {cart} = useContext(CartContext)

  let cartNum = 0;
  cart.map(prod => cartNum += prod.quantity)
  
  return (
    <button className="cart">
      <GrCart />
      {cart.length === 0 ? "" : <span className="cart_num">{cartNum}</span>}
    </button>
  );
}

export default CartWidget;
