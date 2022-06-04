import React from "react";
import { Link } from "react-router-dom";
// import user from "../../../../assets/images/MovieApp/user.jpg";
import "./header.scss";

const Header = () => {
    return (
        <div className="header">
            <Link to="/movie_app">
                <div className="logo">Movie App</div>
            </Link>
            <div className="user-image">
                <img src="../../../../assets/images/MovieApp/user.jpg" alt="user" />
            </div>
        </div>
    );
};

export default Header;
