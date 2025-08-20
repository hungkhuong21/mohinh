import React from "react";
import ProductCard from "../../components/ProductCard/ProductCard";

// Dữ liệu mẫu
const products = [
  { id: 1, name: "Mô hình Gundam", category: "Gundam", price: 400000, oldPrice: 500000, image: "/images/gumdam.jpg" },
  { id: 2, name: "Mô hình Luffy", category: "One Piece", price: 280000, oldPrice: 350000, image: "/images/luffy.jpg" },
  { id: 3, name: "Mô hình Naruto", category: "Naruto", price: 390000, oldPrice: 420000, image: "/images/naruto.jpg" },
  { id: 4, name: "Mô hình Dragon Ball", category: "Dragon Ball", price: 450000, oldPrice: 500000, image: "/images/dragonball.jpg" },
  { id: 5, name: "Mô hình Linh Hồn Tướng", category: "Linh Hồn Tướng", price: 500000, oldPrice: 600000, image: "/images/linhhontuong.jpg" }
];

const Product = () => {
  return (
    <div className="product-list" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "28px", padding: "32px" }}>
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Product;