import React from "react";
import AdminSidebar from "../components/AdminSidebar/AdminSidebar";

const AdminLayout = ({ children }) => {
  return (
    <div style={{ display: "flex" }}>
      <AdminSidebar />
      <div style={{ flex: 1, padding: "20px" }}>
        {children}
      </div>
    </div>
  );
};

export default AdminLayout;
