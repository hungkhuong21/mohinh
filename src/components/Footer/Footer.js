import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-about">
          <h3>Shop Mô Hình</h3>
          <p>Chuyên cung cấp mô hình Gundam, Anime, Manga chất lượng cao.</p>
        </div>
        <div className="footer-contact">
          <h4>Liên hệ</h4>
          <p>📍 345 Hoàng Văn Thụ, Thành phố Quy Nhơn, Bình Định</p>
          <p>📞 0123 456 789</p>
          <p>✉️ shopmohinh@gmail.com</p>
        </div>
        <div className="footer-social">
          <h4>Kết nối</h4>
          <p>Facebook | Instagram | TikTok</p>
        </div>
      </div>
      <div className="footer-bottom">
        © 2025 Shop Mô Hình. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
