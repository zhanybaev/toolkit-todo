import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";

const MainRoutes = (): JSX.Element => {
    return (
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path="/products" element={<ProductsPage/>} />
            </Routes>
        </BrowserRouter>
    );
};

export default MainRoutes;