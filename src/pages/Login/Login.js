import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Xử lý đăng nhập ở đây (gửi API hoặc hiển thị thông báo)
    alert("Đăng nhập thành công!");
  };

  return (
    <div className="login-container">
      <h2>Đăng nhập</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email / Số điện thoại"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Mật khẩu"
          value={form.password}
          onChange={handleChange}
          required
        />
        <input
          type="re-enter password"
          name="re-enter password"
          placeholder="Nhập lại mật khẩu"
          value={form["re-enter password"]}
          onChange={handleChange}
          required
        />
        <a href="/forgot-password" className="forgot-link">Quên mật khẩu?</a>
        <button type="submit">Đăng nhập</button>
        <a href="/register" className="forgot-link" style={{ textAlign: "center" }}>Chưa có tài khoản? Đăng ký</a>
      </form>
    </div>
  );
};

export default Login;
