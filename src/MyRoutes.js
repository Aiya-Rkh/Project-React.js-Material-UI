import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FormSale from "./components/FormSale";
import Navbar from "./components/Navbar";
import AdminProvider from "./context/AdminProvider";
import AuthProvider from "./context/AuthProvider";
import ClientProvider from "./context/ClientProvider";
import AddPage from "./pages/AddPage";
import AdminPage from "./pages/AdminPage";
import CartPage from "./pages/CartPage";
import EditPage from "./pages/EditPage";
import MainPage from "./pages/MainPage";
import PhoneNumber from "./pages/PhoneNumber";

const MyRoutes = () => {
  return (
    <AuthProvider>
      <ClientProvider>
        <AdminProvider>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/admin-panel" element={<AdminPage />} />
              <Route path="/admin-panel/add" element={<AddPage />} />
              <Route path="/admin-panel/edit/:id" element={<EditPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/call" element={<PhoneNumber />} />
              <Route path="/form-sale" element={<FormSale />} />
            </Routes>
          </BrowserRouter>
        </AdminProvider>
      </ClientProvider>
    </AuthProvider>
  );
};

export default MyRoutes;
