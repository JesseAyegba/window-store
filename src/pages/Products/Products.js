import React, { useEffect, useState } from "react";
import "./Products.css";
import Navbar from "../../components/Navbar/Navbar";
import Product from "../../components/Product/Product";
import ProductsHolder from "../../components/ProductsHolder/ProductsHolder";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/actions/cart";
import { useNavigate } from "react-router-dom";
import PageContainer from "../../components/PageContainer/PageContainer";

export default function Products() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(async () => {
    try {
      let res = await fetch(process.env.REACT_APP_PRODUCTS_END_POINT);
      let data = await res.json();
      setProducts(data);
    } catch {
      alert("Could not get products");
    } finally {
      setLoading(false);
    }
  }, []);

  const handleClick = (item) => {
    navigate(`/store/${item.id}`);
  };
  return (
    <PageContainer>
      <div className="products">
        {loading ? (
          <div className="products__loading">
            <h1>Loading products...</h1>
          </div>
        ) : (
          <ProductsHolder>
            {products.map((item) => (
              <Product item={item} handleClick={handleClick} />
            ))}
          </ProductsHolder>
        )}
      </div>
    </PageContainer>
  );
}
