import React from "react";
import "./Cart.css";
import { useSelector, useDispatch } from "react-redux";
import PageContainer from "../../components/PageContainer/PageContainer";
import Product from "../../components/Product/Product";
import { removeFromCart } from "../../store/actions/cart";

export default function Cart() {
  const dispatch = useDispatch();
  let cartState = useSelector((store) => store.cart);
  const handleClick = (item) => {
    dispatch(removeFromCart(item));
  };
  return (
    <PageContainer>
      <div className="cart">
        <div className="cart__wrapper">
          {cartState.map((item) => (
            <Product handleClick={handleClick} key={item.id} item={item} />
          ))}
        </div>
      </div>
    </PageContainer>
  );
}
