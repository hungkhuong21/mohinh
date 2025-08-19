import React from "react";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
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
      </div>

      <button>Thêm vào giỏ hàng</button>
      <button style={{ background: "red", color: "white", marginLeft: "8px" }}>
        Mua ngay
      </button>
    </div>
  );
};

export default ProductCard;
