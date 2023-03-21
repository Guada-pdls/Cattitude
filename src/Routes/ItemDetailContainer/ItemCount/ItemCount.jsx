import React, { useState, useContext, useEffect } from "react";
import "./ItemCount.css";
import { VscAdd, VscRemove } from "react-icons/vsc";
import { CartContext } from "../../../Context/CartContext";
import { Link } from "react-router-dom";

const ItemCount = ({ item }) => {

  const { getInitial, addProduct, setItemBuyNow} = useContext(CartContext)

  let initial = getInitial(item.id)
  let [counter, setCounter] = useState();

  useEffect(() => {
    setCounter(initial)
  }, [initial]);

  const subtract = () => setCounter(counter - 1);
  const add = () => setCounter(counter + 1);

  const subtraction = <button className={counter <= 1 ? "disabled" : ""} onClick={counter > 1 ? subtract : undefined}><VscRemove/></button>  
  const addition = <button className={counter >= item.stock ? "disabled" : ""} onClick={counter < item.stock ? add : undefined}><VscAdd/></button>

return (
  <>
    <div className="ItemCounter">
      {subtraction}
      <p>{counter}</p>
      {addition}
    </div>
    <p>Available stock: {item.stock}</p>
    
    <div className="product-buttons">
      <Link to="/checkout"><button onClick={() => setItemBuyNow({...item, quantity: counter})} className="btn btn-primary">Buy now</button></Link >
      <button className="btn btn-secondary" onClick={() => addProduct(counter, item) }>Add to cart</button>
    </div>
  </>
);
};

export default ItemCount;
