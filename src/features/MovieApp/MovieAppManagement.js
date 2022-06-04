import React from "react";
import { Routes, Route } from "react-router-dom";

import "../../assets/style/MovieApp/color.scss";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";

import { store } from "./features/store";
import { Provider } from "react-redux";
// import MovieListing from "./components/MovieListing/MovieListing";
import MovieDetail from "./components/MovieDetail/MovieDetail";
const MovieAppManagement = () => {
    return (
        <Provider store={store}>
            <div className="app">
                <Header />
                <div className="container">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/:imdbID" element={<MovieDetail />} />
                    </Routes>
                </div>
                <Footer />
            </div>
        </Provider>
    );
};

export default MovieAppManagement;
