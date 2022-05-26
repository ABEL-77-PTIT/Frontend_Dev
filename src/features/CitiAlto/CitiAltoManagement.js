import React from "react";
import { Routes, Route } from "react-router-dom";
import NewDetails from "./components/NewDetails/NewDetails";
import CitiAlto from "./pages/CitiAlto";

const CitiAltoManagement = () => {
    return (
        <Routes>
                <Route path="/" element={<CitiAlto />} />
                <Route path=":id" element={<NewDetails />} />
        </Routes>
    );
};

export default CitiAltoManagement;