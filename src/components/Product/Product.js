import React from "react";
import "./Product.css";
import Truncate from "react-truncate";

export default function Product({ item, handleClick }) {
  return (
    <div onClick={() => handleClick(item)} className="product">
      <img className="product__image" src={item.image} alt="Product image" />
      <div className="product__text">
        <p className="product__title">
          <Truncate lines={1}>{item.title}</Truncate>
        </p>
        <p className="product__price">$ {item.price}</p>
      </div>
    </div>
  );
}
