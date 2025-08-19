// src/components/Header/Header.js
import React from "react";
import "./Header.css";
import { FaShoppingCart, FaSearch, FaUser } from "react-icons/fa";

const Header = () => {
    return (
        <header className="header">
            {/* Logo */}
            <div className="logo">MÔ HÌNH SHOP</div>

            {/* Thanh tìm kiếm */}
            <div className="search-box">
                <input type="text" placeholder="Tìm kiếm sản phẩm..." />
                <button><FaSearch /></button>
            </div>

            {/* Đăng nhập / Đăng ký */}
            <div className="user-actions">
                <a href="/login"><FaUser /> Đăng nhập</a>
                <a href="/register">Đăng ký</a>
            </div>

            {/* Giỏ hàng */}
            <div className="cart">
                <FaShoppingCart size={22} />
                <span className="cart-count">2</span>
            </div>

            {/* Menu */}
            <nav className="menu">
                <a href="/orders">Đơn hàng</a>
            </nav>

        </header>
    );
};

export default Header;
