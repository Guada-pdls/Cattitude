import React, { useEffect, useState } from "react";
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"

const CartContext = React.createContext([]);

const CartProvider = ({ children }) => {
  let [cart, setCart] = useState((localStorage.getItem("cart") === JSON.parse(null)) ? [] : JSON.parse(localStorage.getItem("cart")));

  useEffect(() => localStorage.setItem("cart", JSON.stringify(cart)), [cart])

  const isInCart = id => cart.some(prod => prod.id === id)

  const addProduct = (quantityAdd, item) => {
    const updateProduct = isInCart(item.id)
    ? [...cart.filter(prod => prod.id !== item.id), { ...item, quantity: quantityAdd } ]
    : [...cart, { ...item, quantity: quantityAdd }];
    setCart(updateProduct);
    Toastify({
      text: "Successfully added!",
      duration: 2000,
      close: true,
      stopOnFocus: true,
      gravity: "top", 
      position: "right",
      offset: {
        y: "4rem",
      },
      style: {
        background: "#999999)",
      },
    }).showToast()
  };

  const removeProduct = productId => {
    setCart(cart.filter(product => product.id !== productId))
    Toastify({
      text: "Successfully removed",
      duration: 2000,
      close: true,
      stopOnFocus: true,
      gravity: "top", 
      position: "right",
      offset: {
        y: "4rem",
      },
      style: {
        background: "#999999)",
      },
    }).showToast()
  };

  const clearCart = () => setCart([]);

  const totalPriceCart = () => {
    let total = 0
    cart.map(prod => total += prod.quantity * prod.price)
    return total
  }

  const getInitial = id => {
    const productInCart = cart.find(product => product.id === id);
    return productInCart ? productInCart.quantity : 1;
  }

  const [itemBuyNow, setItemBuyNow] = useState();
  const totalPriceItemBuyNow = () => itemBuyNow.quantity * itemBuyNow.price

  return (
    <CartContext.Provider
      value={{ cart, addProduct, removeProduct, clearCart, isInCart, totalPriceCart, getInitial, itemBuyNow, setItemBuyNow, totalPriceItemBuyNow }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };
