import React, { useEffect, useState } from "react";
import { Routes, Route, useParams } from "react-router-dom";
import { NewsService } from "../../app/Services/CitiAlto";
import NewDetails from "./components/NewDetails/NewDetails";
import CitiAlto from "./pages/CitiAlto";
const CitiAltoManagement = () => {
    const [newDetails, setNewDetails] = useState({});
    const { newId } = useParams();
    useEffect(() => {
        NewsService.news.map((tintuc) => {
            return tintuc.id === newId
                ? setNewDetails({ tintuc })
                : setNewDetails({});
        });
    }, [newId]);

    return (
        <>
            <Routes>
                <Route path="/" element={<CitiAlto />} />
                <Route
                    path={`/:${newId}`}
                    element={<NewDetails data={newDetails} />}
                />
            </Routes>
        </>
    );
};

export default CitiAltoManagement;
