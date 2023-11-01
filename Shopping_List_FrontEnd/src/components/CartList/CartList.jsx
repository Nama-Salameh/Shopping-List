import React, { useState, useEffect } from "react";
import { useCart } from "./CartContext";
import Cart from "./Cart";

const CartList = () => {
  const { cartItems } = useCart();
  if (!cartItems || cartItems.length === 0) {
    return (
      <div>
        <h2>Shopping Cart</h2>
        <p>No items in the cart.</p>
      </div>
    );
  }
  console.log("Cart Contents:", cartItems);

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cartItems.map((cartItem, index) => (
        <Cart key={index} cart={cartItem} />
      ))}
      <p>Total Amount : </p>
    </div>
  );
};

export default CartList;
