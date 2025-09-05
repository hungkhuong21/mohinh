import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// user pages
import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import Cart from "./pages/Cart/Cart";
import Orders from "./pages/Orders/Orders";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

// admin pages
import ProductList from "./pages/Admin/ProductList";
import Dashboard from "./pages/Admin/Dashboard";

// layouts
import UserLayout from "./layouts/UserLayout";
import AdminLayout from "./layouts/AdminLayout";

function App() {
  return (
    <Router>
      <Routes>
        {/* User routes */}
        <Route path="/" element={<UserLayout><Home /></UserLayout>} />
        <Route path="/product" element={<UserLayout><Product /></UserLayout>} />
        <Route path="/product/:id" element={<UserLayout><ProductDetail /></UserLayout>} />
        <Route path="/cart" element={<UserLayout><Cart /></UserLayout>} />
        <Route path="/orders" element={<UserLayout><Orders /></UserLayout>} />
        <Route path="/login" element={<UserLayout><Login /></UserLayout>} />
        <Route path="/register" element={<UserLayout><Register /></UserLayout>} />

        {/* Admin routes */}
        
        <Route path="/admin/" element={<AdminLayout><Dashboard /></AdminLayout>} />
        <Route path="/admin/dashboard" element={<AdminLayout><Dashboard /></AdminLayout>} /> 
        <Route path="/admin/products" element={<AdminLayout><ProductList /></AdminLayout>} />
        
      </Routes>
    </Router>
  );
}

export default App;
