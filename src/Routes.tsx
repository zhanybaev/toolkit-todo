import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import EditProductPage from "./pages/EditProductPage";
import HomePage from "./pages/HomePage";
import ProductDetailPage from "./pages/ProductDetailPage";
import ProductsPage from "./pages/ProductsPage";

const MainRoutes = (): JSX.Element => {
    return (
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path="/products" element={<ProductsPage/>} />
                <Route path="/detail/:id" element={<ProductDetailPage/>} />
                <Route path="/edit/:id" element={<EditProductPage/>} />
            </Routes>
        </BrowserRouter>
    );
};

export default MainRoutes;