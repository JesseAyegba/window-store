import React, { useEffect, useState } from "react";
import "./Products.css";
import Navbar from "../../components/Navbar/Navbar";
import Product from "../../components/Product/Product";
import ProductsHolder from "../../components/ProductsHolder/ProductsHolder";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/actions/cart";

export default function Products() {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(async () => {
    try {
      let res = await fetch("https://fakestoreapi.com/products?sort=desc");
      let data = await res.json();
      setProducts(data);
    } catch {
      alert("Could not get products");
    } finally {
    }
  }, []);

  const handleClick = (item) => {
    dispatch(addToCart(item));
  };
  return (
    <div className="products">
      <Navbar />
      <ProductsHolder>
        {products.map((item) => (
          <Product item={item} handleClick={handleClick} />
        ))}
      </ProductsHolder>
    </div>
  );
}
