import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import "./Dashboard.css";

const Dashboard = () => {
    // Data giả lập
    const revenueData = [
        { month: "Jan", revenue: 50000000 },
        { month: "Feb", revenue: 75000000 },
        { month: "Mar", revenue: 90000000 },
        { month: "Apr", revenue: 60000000 },
        { month: "May", revenue: 120000000 },
        { month: "Jun", revenue: 1200000000 },
    ];

    const recentOrders = [
        { id: "DH001", customer: "Nguyễn Văn A", total: "2.500.000 VNĐ", status: "Hoàn tất" },
        { id: "DH002", customer: "Trần Thị B", total: "1.200.000 VNĐ", status: "Đang xử lý" },
        { id: "DH003", customer: "Lê Văn C", total: "3.800.000 VNĐ", status: "Hoàn tất" },
    ];

    return (
        <div className="dashboard">
            <h1>📊 Thống kê</h1>

            {/* Thẻ số liệu tổng quan */}
            <div className="cards">
                <div className="card">📦 Sản phẩm<br />120</div>
                <div className="card">📦 Sản phẩm còn hàng<br />120</div>
                <div className="card">📦 Sản phẩm hết hàng<br />120</div>
                <div className="card">🛒 Đơn hàng<br />350</div>
                <div className="card">🛒 Đơn hàng đã xử lý<br />350</div>
                <div className="card">🛒 Đơn hàng chưa xử lý<br />350</div>
                <div className="card">
                    💰 Doanh thu<br />{(250000000).toLocaleString("vi-VN")} VNĐ
                </div>
                <div className="card">👥 Khách hàng<br />85</div>
            </div>

            {/* Biểu đồ doanh thu */}
            <div className="chart-container">
                <h2>Doanh thu theo tháng</h2>
                <ResponsiveContainer width="100%" height={400}>
                    <BarChart data={revenueData} margin={{ top: 20, right: 30, left: 70, bottom: 5 }}>
                        <XAxis dataKey="month" />
                        <YAxis
                            tickFormatter={(value) => value.toLocaleString("vi-VN") + " VNĐ"}
                        />
                        <Tooltip formatter={(value) => value.toLocaleString("vi-VN") + " VNĐ"} />
                        <Legend />
                        <Bar dataKey="revenue" fill="#030124ff" name="Doanh thu (VNĐ)" />
                    </BarChart>
                </ResponsiveContainer>
            </div>


            {/* Bảng đơn hàng gần đây */}
            <div className="table-container">
                <h2>Đơn hàng gần đây</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Mã ĐH</th>
                            <th>Khách hàng</th>
                            <th>Tổng tiền</th>
                            <th>Trạng thái</th>
                        </tr>
                    </thead>
                    <tbody>
                        {recentOrders.map((order) => (
                            <tr key={order.id}>
                                <td>{order.id}</td>
                                <td>{order.customer}</td>
                                <td>{order.total}</td>
                                <td>{order.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Dashboard;
