import React, { useEffect, useState } from "react";
import "./ProductDetail.css";
import { useParams } from "react-router-dom";
import PageContainer from "../../components/PageContainer/PageContainer";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/actions/cart";

export default function ProductDetail() {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(async () => {
    try {
      const res = await fetch(
        `${process.env.REACT_APP_PRODUCTS_END_POINT}/${id}`
      );
      const data = await res.json();
      setProduct(data);
    } catch {
      alert("Could not load product");
    } finally {
      setLoading(false);
    }
  }, []);

  const handleClick = (item) => {
    dispatch(addToCart(item));
  };
  return (
    <PageContainer>
      <div className="productDetail">
        {loading ? (
          <div className="productDetail__loading">
            <h1>Fetching item...</h1>
          </div>
        ) : (
          <div className="productDetail__wrapper">
            <div className="productDetail__wrapperLeft">
              <img
                className="productDetail__image"
                src={product.image}
                alt="Product Image"
              />
            </div>
            <div className="productDetail__wrapperRight">
              <p className="productDetail__title">{product.title}</p>
              <p className="productDetail__price">$ {product.price}</p>
              <p className="productDetail__description">
                {product.description}
              </p>
              <button
                onClick={() => handleClick(product)}
                className="productDetail__btn"
              >
                Add to Cart
              </button>
            </div>
          </div>
        )}
      </div>
    </PageContainer>
  );
}
