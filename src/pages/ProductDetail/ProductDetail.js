import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./ProductDetail.css";

// Dữ liệu mẫu cho frontend
const sampleProducts = [
  {
    id: "1",
    name: "Mô hình Gundam RX-78-2",
    image: "/images/gumdam.jpg",
    listImages: ["/images/gumdam.jpg", "/images/gumdam1.jpg", "/images/gumdam2.jpg"],
    price: 450000,
    oldPrice: 550000,
    trademark: "Bandai",  
    quantity: 12,
    description: "Mô hình Gundam RX-78-2 tỉ lệ 1/144, chi tiết sắc nét, chất liệu nhựa cao cấp."
  },
  {
    id: "2",
    name: "Mô hình Luffy",
    image: "/images/luffy.jpg",
    listImages: ["/images/luffy.jpg"],
    price: 320000,
    oldPrice: 400000,
    quantity: 12,
    description: "Mô hình nhân vật Luffy trong One Piece, cao 18cm, thích hợp trưng bày."
  },
  {
    id: "3",
    name: "Mô hình Naruto",
    image: "/images/naruto.jpg",
    listImages: ["/images/naruto.jpg"],
    price: 390000,
    oldPrice: 420000,
    quantity: 12,
    description: "Mô hình Naruto cực chất, chi tiết tinh xảo, phù hợp cho fan bộ truyện."
  }
];

const ProductDetail = () => {
  const { id } = useParams();
  const product = sampleProducts.find(p => p.id === id);

  const [mainImg, setMainImg] = useState(product?.image);

  if (!product) {
    return <div className="product-detail-page">Không tìm thấy sản phẩm!</div>;
  }

  // Tính phần trăm giảm giá
  let discount = null;
  if (product.oldPrice && product.price && product.oldPrice > product.price) {
    discount = Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100);
  }

  return (
    <div className="product-detail-page">
      <div className="product-detail-img-block">
        <img src={mainImg} alt={product.name} className="product-detail-main-img" />
        <div className="product-detail-list-images">
          {product.listImages && product.listImages.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Ảnh ${idx + 1}`}
              className={mainImg === img ? "active" : ""}
              onClick={() => setMainImg(img)}
            />
          ))}
        </div>
      </div>
      <div className="product-detail-info">
        <h2 className="product-detail-title">{product.name}</h2>
        <div className="product-detail-price-box">
          <span className="product-detail-new-price">{product.price.toLocaleString("vi-VN")} VNĐ</span>
          <span className="product-detail-old-price">{product.oldPrice.toLocaleString("vi-VN")} VNĐ</span>
          {discount && (
            <span className="product-detail-discount-percent">-{discount}%</span>
          )}
        </div>
        <p className="product-detail-trademark">Hãng: {product.trademark}</p>
        <p className="product-detail-quantity">Số lượng: {product.quantity}</p>
        <p className="product-detail-description">{product.description}</p>
        <div className="product-detail-actions">
          <button className="product-detail-add-cart-btn">🛒 Thêm vào giỏ hàng</button>
          <button className="product-detail-buy-btn">Mua ngay</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;