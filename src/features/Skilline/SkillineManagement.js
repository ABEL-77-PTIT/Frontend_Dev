import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
const SkillineManagement = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </>
    );
};

export default SkillineManagement;
