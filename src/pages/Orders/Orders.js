import React from "react";
import "./Orders.css";

// Dữ liệu mẫu đơn hàng
const orders = [
  {
    id: "DH001",
    date: "2025-08-20",
    status: "Đang xử lý",
    items: [
      { name: "Mô hình Gundam RX-78-2", quantity: 1, price: 450000 },
      { name: "Mô hình Luffy", quantity: 2, price: 280000 }
    ],
    total: 1010000
  },
  {
    id: "DH002",
    date: "2025-08-18",
    status: "Đã giao",
    items: [
      { name: "Mô hình Naruto", quantity: 1, price: 390000 }
    ],
    total: 390000
  }
];

const Orders = () => {
  return (
    <div className="orders-container">
      <h2>Đơn hàng của bạn</h2>
      {orders.length === 0 ? (
        <div className="empty-orders">Bạn chưa có đơn hàng nào.</div>
      ) : (
        <div className="orders-list">
          {orders.map(order => (
            <div className="order-card" key={order.id}>
              <div className="order-header">
                <span className="order-id">Mã đơn: {order.id}</span>
                <span className={`order-status ${order.status === "Đã giao" ? "delivered" : ""}`}>
                  {order.status}
                </span>
              </div>
              <div className="order-date">Ngày đặt: {order.date}</div>
              <div className="order-items">
                {order.items.map((item, idx) => (
                  <div className="order-item" key={idx}>
                    <span>{item.name}</span>
                    <span>Số lượng: {item.quantity}</span>
                    <span>{item.price.toLocaleString("vi-VN")} VNĐ</span>
                  </div>
                ))}
              </div>
              <div className="order-total">
                Tổng tiền: <b>{order.total.toLocaleString("vi-VN")} VNĐ</b>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Orders;