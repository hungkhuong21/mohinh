import React from "react";
import "./ProductList.css";

const ProductList = () => {
  const products = [
    { id: 1, code: "SP001", name: "Gundam", type: "Đồ điện", price: "600.000 (VNĐ)", note: "Quạt điện thế hệ mới", image: "/images/gumdam.jpg" },
    { id: 2, code: "SP002", name: "Luffy", type: "Đồ điện", price: "600.000 (VNĐ)", note: "Quạt điện thế hệ mới", image: "/images/luffy.jpg" },
  ];

  return (
    <div className="product-list">
      <h2>Danh Sách Sản Phẩm</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Mã Sản Phẩm</th>
            <th>Tên Sản Phẩm</th>
            <th>Mã Loại Sản Phẩm</th>
            <th>Đơn Giá</th>
            <th>Ghi Chú</th>
            <th>Hình Ảnh</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.code}</td>
              <td>{p.name}</td>
              <td>{p.type}</td>
              <td>{p.price}</td>
              <td>{p.note}</td>
              <td><img src={p.image} alt="SP" width="40" /></td>
              <td>
                <button className="btn btn-add">Thêm mới</button>
                <button className="btn btn-edit">Sửa</button>
                <button className="btn btn-delete">Xóa</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
