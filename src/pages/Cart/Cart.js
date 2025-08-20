import React, { useState } from "react";
import "./Cart.css";

// Dữ liệu mẫu giỏ hàng
const initialCart = [
  {
    id: 1,
    name: "Mô hình Gundam RX-78-2",
    image: "/images/gumdam.jpg",
    price: 450000,
    quantity: 1
  },
  {
    id: 2,
    name: "Mô hình Luffy",
    image: "/images/luffy.jpg",
    price: 320000,
    quantity: 2
  }
];

const Cart = () => {
  const [cart, setCart] = useState(initialCart);

  const handleQuantityChange = (id, value) => {
    setCart(cart.map(item =>
      item.id === id ? { ...item, quantity: value < 1 ? 1 : value } : item
    ));
  };

  const handleRemove = id => {
    setCart(cart.filter(item => item.id !== id));
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart-container">
      <h2>Giỏ hàng của bạn</h2>
      {cart.length === 0 ? (
        <div className="cart-empty">Giỏ hàng đang trống.</div>
      ) : (
        <div className="cart-list">
          {cart.map(item => (
            <div className="cart-item" key={item.id}>
              <img src={item.image} alt={item.name} className="cart-item-img" />
              <div className="cart-item-info">
                <div className="cart-item-name">{item.name}</div>
                <div className="cart-item-price">{item.price.toLocaleString("vi-VN")} VNĐ</div>
                <div className="cart-item-quantity">
                  Số lượng:
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={e => handleQuantityChange(item.id, parseInt(e.target.value))}
                  />
                </div>
              </div>
              <button className="cart-item-remove" onClick={() => handleRemove(item.id)}>
                Xóa
              </button>
            </div>
          ))}
          <div className="cart-total">
            Tổng tiền: <b>{total.toLocaleString("vi-VN")} VNĐ</b>
          </div>
          <button className="cart-checkout-btn">Thanh toán</button>
        </div>
      )}
    </div>
  );
};

export default Cart;