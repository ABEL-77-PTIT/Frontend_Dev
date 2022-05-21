import React from "react";
import { Link } from "react-router-dom";
import { BsArrowLeftSquareFill } from "react-icons/bs";

import Home from "./Home";
const DefaultLayout = ({ children }) => {
    return (
        <>
            <div>{children}</div>
            <Link to="/" element={<Home />}>
                <BsArrowLeftSquareFill  className="fixed bottom-4 left-4 text-32 text-teal-800" title="GO TO HOME" />
            </Link>
        </>
    );
};

export default DefaultLayout;
