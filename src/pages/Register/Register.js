import React, { useState } from "react";
import "./Register.css";

const Register = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Xử lý đăng ký ở đây (gửi API hoặc hiển thị thông báo)
    alert("Đăng ký thành công!");
  };

  return (
    <div className="register-container">
      <h2>Đăng ký</h2>
      <form className="register-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Tên đăng nhập"
          value={form.name}
          onChange={handleChange}
          required
        />
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
        <button type="submit">Đăng ký</button>
        <a href="/login" className="forgot-link" style={{ textAlign: "center" }}>Đã có tài khoản? Đăng nhập</a>
      </form>
    </div>
  );
};

export default Register;