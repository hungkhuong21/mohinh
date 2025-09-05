import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./AdminSidebar.css";

const AdminSidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Xóa thông tin đăng nhập (token / user) trong localStorage hoặc sessionStorage
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    // Chuyển về trang đăng nhập
    navigate("/login");
  };

  return (
    <div className="sidebar">
      <h2>Hệ Thống Quản Lý</h2>
      <ul>
        <li>
          <NavLink to="/admin" className="menu-link">
            Thống kê
          </NavLink>
        </li>
        <li>
          <NavLink to="/admin/products" className="menu-link">
            Quản lý sản phẩm
          </NavLink>
        </li>
        <li>
          <NavLink to="/admin/categories" className="menu-link">
            Quản lý danh mục
          </NavLink>
        </li>
        <li>
          <NavLink to="/admin/orders" className="menu-link">
            Quản lý đơn hàng
          </NavLink>
        </li>
        <li>
          <NavLink to="/admin/customers" className="menu-link">
            Quản lý khách hàng
          </NavLink>
        </li>
        <li>
          <NavLink to="/admin/users" className="menu-link">
            Quản lý tài khoản
          </NavLink>
        </li>
      </ul>

      {/* Nút đăng xuất */}
      <div className="logout-section">
        <button className="logout-btn" onClick={handleLogout}>
          Đăng xuất
        </button>
      </div>
    </div>
  );
};

export default AdminSidebar;
