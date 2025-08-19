import React, { useState } from "react";
import "./Home.css";
import ProductCard from "../../components/ProductCard/ProductCard";

const categories = ["Tất cả", "Gundam", "One Piece", "Naruto", "Dragon Ball", "Linh Hồn Tướng"];

const products = [
  { id: 1, name: "Mô hình Gundam", category: "Gundam", price: 400000, oldPrice: 500000, image: "/images/gumdam.jpg" },
  { id: 2, name: "Mô hình Luffy", category: "One Piece", price: 280000, oldPrice: 350000, image: "/images/luffy.jpg" },
  { id: 3, name: "Mô hình Naruto", category: "Naruto", price: 390000, oldPrice: 420000, image: "/images/naruto.jpg" },
  { id: 4, name: "Mô hình Dragon Ball", category: "Dragon Ball", price: 450000, oldPrice: 500000, image: "/images/dragonball.jpg" },
  { id: 5, name: "Mô hình Linh Hồn Tướng", category: "Linh Hồn Tướng", price: 500000, oldPrice: 600000, image: "/images/linhhontuong.jpg" }
];

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("Tất cả");

  const filteredProducts =
    selectedCategory === "Tất cả"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <div className="home">

      {/* Danh mục */}
      <h2 className="section-title">Danh mục</h2>
      <div className="category-buttons" style={{ marginBottom: "24px" }}>
        {categories.map((c) => (
          <button
            key={c}
            className={`category-btn ${selectedCategory === c ? "active" : ""}`}
            onClick={() => setSelectedCategory(c)}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Sản phẩm */}
      <h2 className="section-title">Sản phẩm nổi bật</h2>
      <div className="product-grid">
        {filteredProducts.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
};

export default Home;
