import React, { useEffect } from "react";
import MovieListing from "../MovieListing/MovieListing";

import { useDispatch } from "react-redux";
import {
    fetchAsyncMovies,
    fetchAsyncShows,
} from "../../features/movie/movieSlice";
const Home = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchAsyncMovies());
        dispatch(fetchAsyncShows());
    }, [dispatch]);
    return (
        <div>
            <div className="bangetAllShowsner-img"></div>
            <MovieListing />
        </div>
    );
};

export default Home;
