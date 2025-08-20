import React from "react";
import { useParams } from "react-router-dom";
import "./ProductDetail.css";

// Giả sử bạn import danh sách sản phẩm từ file data
import products from "../data/products"; // Đổi đường dẫn cho đúng với dự án của bạn

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => String(p.id) === id);

  if (!product) {
    return <div className="product-detail">Không tìm thấy sản phẩm!</div>;
  }

  // Tính phần trăm giảm giá
  let discount = null;
  if (product.oldPrice && product.price && product.oldPrice > product.price) {
    discount = Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100);
  }

  return (
    <div className="product-detail">
      <div className="detail-img">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="detail-info">
        <h2>{product.name}</h2>
        <div className="price-box">
          <span className="new-price">{product.price.toLocaleString("vi-VN")} VNĐ</span>
          <span className="old-price">{product.oldPrice.toLocaleString("vi-VN")} VNĐ</span>
          {discount && (
            <span className="discount-percent">-{discount}%</span>
          )}
        </div>
        <p className="description">{product.description}</p>
        <div className="detail-actions">
          <button className="add-cart-btn">🛒 Thêm vào giỏ hàng</button>
          <button className="buy-btn">Mua ngay</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;