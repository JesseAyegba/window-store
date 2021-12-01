import React from "react";
import "./CartIcon.css";
import { BsCart3 } from "react-icons/bs";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function CartIcon() {
  const navigate = useNavigate();
  let cartState = useSelector((store) => store.cart);

  return (
    <div onClick={() => navigate("/cart")} className="cartIcon">
      <BsCart3 className="cartIcon__icon" />
      <div className="cartIcon__valueWrapper">
        <p className="cartIcon__value">{cartState.length}</p>
      </div>
    </div>
  );
}
