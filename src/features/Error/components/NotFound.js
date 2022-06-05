import React from "react";
import { Link } from "react-router-dom";
import imgNotFound from "../../../assets/images/pnf.jpg"
const NotFoundPage = () => {
    return (
        <div className="absolute top-2/4 text-center left-2/4 -translate-x-1/2 -translate-y-1/2">
            {/* <h1 className="text-red-700 text-[100px]">404</h1> */}
            <h3 className="sm:text-32 text-16 text-green-600 mb-4">Then there will be a path that will lead you to success.</h3>
            <img src={imgNotFound} alt="Img Not Found"/>
            <p>
                <Link to="/" className="text-red-600 font-semibold text-24 hover:text-red-800">Go Home</Link>
            </p>
        </div>
    );
};

export default NotFoundPage;
