import React from "react";
import "./Home.css";
import ProductCard from "../../components/ProductCard/ProductCard";

const products = [
  { id: 1, name: "Mô hình Gundam", price: 400000, oldPrice: 500000, image: "/images/gumdam.jpg" },
  { id: 2, name: "Mô hình Luffy", price: 280000, oldPrice: 350000, image: "/images/luffy.jpg" },
  { id: 3, name: "Mô hình Naruto", price: 390000, oldPrice: 420000, image: "/images/naruto.jpg" },
  { id: 4, name: "Mô hình Dragon Ball", price: 450000, oldPrice: 500000, image: "/images/dragonball.jpg" }
];


const Home = () => {
  return (
    <div className="home">
      {/* Banner */}
      <div className="home-banner">
        <img src="/images/banner.jpg" alt="Shop Banner" />
        <div className="banner-text">
          <h1>Cửa Hàng Mô Hình</h1>
          <p>Khám phá những mẫu mô hình đẹp nhất!</p>
        </div>
      </div>

      {/* Product grid */}
      <h2 className="section-title">Sản phẩm nổi bật</h2>
      <div className="product-grid">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
};

export default Home;
