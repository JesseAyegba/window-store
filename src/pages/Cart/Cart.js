import React from "react";
import "./Cart.css";
import { useSelector } from "react-redux";

export default function Cart() {
  let cartState = useSelector((store) => store.cart);
  return (
    <div className="cart">
      <h1>This is the cart</h1>
      <h3>{JSON.stringify(cartState)}</h3>
    </div>
  );
}
