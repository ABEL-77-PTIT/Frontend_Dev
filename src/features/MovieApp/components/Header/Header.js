import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
    fetchAsyncMovies,
    fetchAsyncShows,
} from "../../features/movie/movieSlice";
import user from "../../../../assets/images/MovieApp/user.png";
import "./header.scss";

const Header = () => {
    const [term, setTerm] = useState("");
    const dispatch = useDispatch();
    const submitHandler = (e) => {
        e.preventDefault();
        if (term === "") return alert("Please enter search term!");
        dispatch(fetchAsyncMovies(term));
        dispatch(fetchAsyncShows(term));
        setTerm("");
    };
    return (
        <div className="movie__header">
            <div className="movie__logo">
                <Link to="/movie_app">Movie App</Link>
            </div>
            <div className="movie__search-bar">
                <form onSubmit={submitHandler}>
                    <input
                        type="text"
                        value={term}
                        placeholder="Search Movies or Shows"
                        onChange={(e) => setTerm(e.target.value)}
                    />
                    <button type="submit">
                        <i className="fa fa-search"></i>
                    </button>
                </form>
            </div>
            <div className="movie__user-image">
                <img src={user} alt="user" />
            </div>
        </div>
    );
};

export default Header;
