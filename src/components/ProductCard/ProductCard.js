import React from "react";
import "./ProductCard.css";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/product/${product.id}`);
  };

  // Tính phần trăm giảm giá
  let discount = null;
  if (product.oldPrice && product.price && product.oldPrice > product.price) {
    discount = Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100);
  }

  return (
    <div className="product-card" onClick={handleClick}>
      <img src={product.image} alt={product.name} className="product-img" />
      <h3>{product.name}</h3>

      {/* Giá */}
      <div className="price-box">
        {product.price && (
          <span className="new-price">
            {product.price.toLocaleString("vi-VN")} VNĐ
          </span>
        )}
        <span className="old-price">
          {product.oldPrice.toLocaleString("vi-VN")} VNĐ
        </span>
        {discount && (
          <span className="discount-percent" style={{ color: "#16a34a", fontWeight: "bold", fontSize: "15px" }}>
            -{discount}%
          </span>
        )}
      </div>

      <button>🛒Thêm vào giỏ hàng</button>
      <button style={{ background: "red", color: "white", marginLeft: "8px", marginTop: "15px" }}>
        Mua ngay
      </button>
    </div>
  );
};

export default ProductCard;
