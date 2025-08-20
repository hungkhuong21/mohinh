import React from "react";
import "./Header.css";
import { FaShoppingCart, FaSearch, FaUser } from "react-icons/fa";

const Header = () => {
    return (
        <header className="header">
          <div className="logo">MÔ HÌNH SHOP</div>
          <div className="search-box">
            <input type="text" placeholder="Tìm kiếm sản phẩm..." />
            <button><FaSearch /></button>
          </div>
          <div className="right-section">
            <div className="user-cart">
              <a href="/login" className="user-btn"><FaUser /> Đăng nhập</a>
              <a href="/register" className="user-btn">Đăng ký</a>
              <nav className="menu">
              <a href="/orders">Đơn hàng</a>
            </nav>
              <div className="cart">
                <FaShoppingCart size={22} />
                <span className="cart-count">2</span>
              </div>
            </div>
          </div>
        </header>
    );
};

export default Header;